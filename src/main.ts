import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.getOrThrow<number>('PORT', {
    infer: true,
  });
  await app.listen(port)
    console.log(`Application is running on: http://localhost:${port}`);
    console.log('NODE_ENV =', process.env.NODE_ENV);
  }
  
  bootstrap();