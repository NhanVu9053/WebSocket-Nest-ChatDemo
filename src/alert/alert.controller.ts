import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { Logger } from 'winston';
import { AlertGateway } from './alert.gateway';

@Controller('alert')
export class AlertController {
    constructor(private  alertGateway: AlertGateway,
        @Inject('winston') private readonly logger: Logger){}

        @Post()
        @HttpCode(200)
        sendAlertToAll(@Body() dto: { message: string }) {
            this.alertGateway.sendToAll(dto.message);
            return dto;
        }
}
