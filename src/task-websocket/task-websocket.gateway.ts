/* eslint-disable prettier/prettier */
import { WebSocketGateway, WebSocketServer,
    SubscribeMessage, OnGatewayConnection,
    OnGatewayDisconnect,} from '@nestjs/websockets';
  
    @WebSocketGateway()
  export class TaskWebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    
    @WebSocketServer() server;
    users = 0;
    
    async handleConnection() {
      // A client has connected
      this.users++;
      // Notify connected clients of current users
      this.server.emit('users', this.users);
    }
    async handleDisconnect() {
      // A client has disconnected
      this.users--;
      // Notify connected clients of current users
      this.server.emit('users', this.users);
    }
    @SubscribeMessage('task')
    async onChat(client, message) {
      client.broadcast.emit('task', message);
    }
  }