import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks(){
        return this.taskService.getAllTask();
    }

    @Post()
    createTask(@Body() task: any){
        return this.taskService.createTask(task)
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
