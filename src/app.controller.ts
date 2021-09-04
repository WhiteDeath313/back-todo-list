import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './Task';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('tasks')
  getTasks(): Task[] {
    return this.appService.getTasks();
  }
}
