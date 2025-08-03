import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const rawPort = configService.getOrThrow<string>('PORT', { infer: true });
  const port: number = Number(rawPort);

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log('NODE_ENV =', process.env.NODE_ENV);
}

// ✅ Добавлен void для подавления линтеров
void bootstrap();
