import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskTitleUppercasePipe } from './pipes/task-title-uppercase.pipe';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    @UseGuards(AuthGuard)
    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(
      @Body(new ValidationPipe(), TaskTitleUppercasePipe)
      createTaskDto: CreateTaskDto,
    ) {
      return this.taskService.createTask(createTaskDto);
    } 

    @Put(':id')
    updateTask(@Param('id') id:string){
        return `This will update the task with ID ${id}`
    }

    @Delete(':id')
    deleteTask(@Param('id') id:string){
        return `This will delete the task with ID ${id}`;
    }

}
