import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSModule } from './user-s/user-s.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal : true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME, 
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserSModule,
    AuthModule,
    ServicesModule,
  ],
  controllers: [AppController], 
  providers: [AppService],   
})
export class AppModule {}