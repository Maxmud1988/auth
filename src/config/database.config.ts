// database.config.ts

import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres', // указываем, что используем PostgreSQL
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'auth',
  autoLoadModels: true, // автоматически загружать модели из указанной директории
  synchronize: true, // автоматически создавать таблицы при запуске приложения (важно только для разработки)
  models: [],
};

export const databaseConfigModule = ConfigModule.forRoot({
  envFilePath: ['.env'], // указываем, где искать файл с переменными окружения
});
