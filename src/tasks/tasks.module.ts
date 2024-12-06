import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TasksController);
  }
}
