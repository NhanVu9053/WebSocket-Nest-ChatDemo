import { Inject } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from 'winston';


@WebSocketGateway()
export class AppGateway implements 
OnGatewayInit,
OnGatewayConnection,
 OnGatewayDisconnect
{
  //Có thể sử dụng options Socket.io như PORT,{path, clientServe...}
  @WebSocketServer() wss: Server
  @Inject('winston') private readonly logger: Logger;

  afterInit(server: Server) {
    this.logger.debug(`Socket Server Init Completed`)
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.debug(`Client [disconnected]: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.debug(`Client [connected]: ${client.id}`);
  }

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: string): void{
    this.wss.emit('msgToClient',text)
    // return {event: 'msgToClient', data: text};
  }
}
