import { Module } from '@nestjs/common';
import { TaskWebsocketGateway } from './task-websocket.gateway';

@Module({
  providers: [TaskWebsocketGateway],
})
export class TaskWebsocketModule {}
