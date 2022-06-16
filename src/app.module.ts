import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { WinstonModule } from 'nest-winston';
import { ChatGateway } from './chat/chat.gateway';
import { AlertGateway } from './alert/alert.gateway';
import { AlertController } from './alert/alert.controller';
import * as winston from 'winston';
import * as path from 'path';

@Module({
  imports: [
    WinstonModule.forRoot({
      defaultMeta: { service: 'user-service' },
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY/MM/DD HH:mm:ss'
        }),
        winston.format.printf(({ level, message, defaultMeta, timestamp, stack, trace }) => {
          return `${timestamp} [${defaultMeta}] ${level}: ${message} ${stack ? stack : ''} ${trace ? trace : ''}`;
        }),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/debug/'), //path to where save loggin result 
          filename: 'debug.log', //name of file where will be saved logging result
          level: 'debug',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/error/'),
          filename: 'error.log',
          level: 'error',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/info/'),
          filename: 'info.log',
          level: 'info',
        }),
      ],
    }),
  ],
  controllers: [AlertController],
  providers: [AppGateway, ChatGateway, AlertGateway],
})
export class AppModule {}
