import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import configurations from '../../config/app.config';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  databaseConfig,
  databaseConfigModule,
} from '../../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [databaseConfigModule],
      useFactory: () => databaseConfig,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
