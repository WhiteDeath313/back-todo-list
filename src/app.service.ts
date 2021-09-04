import { Injectable } from '@nestjs/common';
import { Task } from './Task';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTasks(): Task[] {
    //Connection to bdd for getting all tasks
    let test: Task = {
      _id: '1',
      _description: 'Simple CRUD in nest.js, mongodb and angular',
      _isDone: true,
      _title: 'Task to do'
    };
    return [test, test];
  }
}
