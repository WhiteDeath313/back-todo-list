/* eslint-disable prettier/prettier */
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
import { TasksService } from './tasks.service';
import { Task } from './task.model';
  
  @Controller('tasks')
  export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
  
    @Post()
    async addTask(
      @Body('task') task: Task,
    ) {
      const generatedId = await this.tasksService.insertTask(
        task._title,
        task._description,
        task._isDone,
      );
      return { id: generatedId };
    }
  
    @Get(':_isDone')
    async getAllTasks(@Param('_isDone') _isDone: boolean) {
        const tasks = await this.tasksService.getTasks(_isDone);
        return tasks;
    }

    @Patch(':_id')
    async updateTask(
      @Param('_id') _id: string,
      @Body('_title') _title: string,
      @Body('_description') _description: string,
      @Body('_isDone') _isDone: boolean,
    ) {
      await this.tasksService.updateTask(_id, _title, _description, _isDone);
      return null;
    }
  
    @Delete(':_id')
    async removeTask(@Param('_id') _id: string) {
        await this.tasksService.deleteTask(_id);
        return null;
    }
  }