import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskGateway } from './task.gateway';
@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Import Task entity here
  controllers: [TasksController],
  providers: [TasksService, TaskGateway ],
  exports: [TasksService], // Export if needed by other modules
})
export class TasksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TasksController);
  }
}
