
import { Inject } from '@nestjs/common';
import { 
      WebSocketGateway, 
      WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io'
import { Logger } from 'winston';

@WebSocketGateway({namespace: '/alert'})
export class AlertGateway {
  @Inject('winston') private readonly logger: Logger;
  @WebSocketServer() wss: Server;

  handleConnection(client: Socket, ...args: any[]) {
    client.emit('msgToClient', 'Connected to AlertGateway!');
  }

  sendToAll(msg: string) {
    this.wss.emit('alertToClient', { message: msg, type: 'Notifications',
    color: '#2ecc71', });
  }
}
