import { Inject } from '@nestjs/common';
import { OnGatewayConnection, 
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway, 
  WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io'
import { Logger } from 'winston';

@WebSocketGateway({namespace: '/chat'})
export class ChatGateway implements
OnGatewayConnection,
 OnGatewayInit,
  OnGatewayDisconnect 
{
  @Inject('winston') private readonly logger: Logger;

  @WebSocketServer() wss: Server;

  afterInit(server: any) {
    this.logger.debug("Socker Server Initalized")
  }
  handleDisconnect(client: Socket) {
    this.logger.debug(`Socker Server [disconnect] client ${client.id}`)
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.debug(`Socker Server [connect] client ${client.id}`)
  }


  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, message: { sender: string, room: string, message: string }) {
    this.wss.to(message.room).emit('chatToClient', message);
  }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, room: string ) {
    client.join(room);
    client.emit('joinedRoom', room);
  }

  @SubscribeMessage('leaveRoom')
  handleRoomLeave(client: Socket, room: string ) {
    client.leave(room);
    client.emit('leftRoom', room);
  }
}
