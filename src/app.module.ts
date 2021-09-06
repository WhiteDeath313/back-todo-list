import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './task/tasks.module';
import { TaskWebsocketModule } from './task-websocket/task-websocket.module';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      'mongodb+srv://root:toor@cluster0.ioztn.mongodb.net/Cluster0?retryWrites=true&w=majority',
    ),
    TaskWebsocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
