/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Task } from './task.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>,
  ) {}

  private tasks: Task[] = [];

  async insertTask(_title: string, _description: string, _isDone: boolean) {
    const newTask = new this.taskModel({_title, _description, _isDone});
    const result = await newTask.save();
    return result.id as string;
  }

  async getTasks(_isDone: boolean) {
    if (_isDone)
      _isDone;
    const tasks = await this.taskModel.find().exec();
    return tasks.map(task => ({
      _id: task._id,
      _title: task._title,
      _description: task._description,
      _isDone: task._isDone,
    }));
  }

  async updateTask(_id: string, _title: string, _description: string, _isDone: boolean) {
    const updatedTask = await this.findTask(_id);
    updatedTask._title = _title;
    updatedTask._description = _description;
    updatedTask._isDone = _isDone;
    updatedTask.save();
  }

  async deleteTask(_id: string) {
    const result = await this.taskModel.deleteOne({
      _id: _id
    }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }

  private async findTask(_id: string): Promise<Task> {
    let task;
    try {
      task = await this.taskModel.findById(_id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find task.');
    }
    if (!task) {
      throw new NotFoundException('Could not find task.');
    }
    return task;
  }
}