import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should create a task', () => {
    const task = { title: 'Test', description: 'Testing', completed: false };
    const result = service.createTask(task);
    expect(result).toEqual(expect.objectContaining(task));
  });
});
