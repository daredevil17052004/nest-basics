import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { TaskGateway } from './task.gateway';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly taskGateway: TaskGateway,
  ) {}

  getAllTasks() {
    return this.taskRepository.find();
  }

  async createTask(task: Partial<Task>) {
    const newTask = this.taskRepository.create(task);
    const savedTask = await this.taskRepository.save(newTask);
    this.taskGateway.broadcastTask(savedTask);
    return savedTask;
  }
}
