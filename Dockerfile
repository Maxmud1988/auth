# ----------------------------
# STAGE 1: Build
# ----------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Устанавливаем зависимости только для сборки
COPY package.json package-lock.json ./
RUN npm install

# Копируем остальной код
COPY . .

# Устанавливаем Prisma CLI (для миграций и генерации клиента)
RUN npx prisma generate

# Собираем проект
RUN npm run build

# ----------------------------
# STAGE 2: Runtime
# ----------------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Устанавливаем только runtime-зависимости
COPY package.json package-lock.json ./
RUN npm install --omit=dev --ignore-scripts

# Копируем собранные артефакты из builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# .env (либо монтируем через docker-compose)
COPY .env .env

CMD ["node", "dist/main.js"]
