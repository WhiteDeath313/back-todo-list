/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task } from './task/task.model';
import { TasksService } from './task/tasks.service';

@Injectable()
export class AppService {
  
  constructor(private tasksService: TasksService) { 
  }

  getHello(): string {
    return 'Hello World!';
  }
  getTasks(): Task[] {
    let tasks;
    try {
      this.tasksService.getTasks(true).then(res => {
        tasks = res;
      });
    } catch (error) {
      return [];
    }
    return tasks;
  }
}
