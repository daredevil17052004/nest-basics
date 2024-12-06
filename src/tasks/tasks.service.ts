import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [];

    getAllTask(){
        return this.tasks;
    }

    createTask(task:any){
        this.tasks.push(task);
        return task;
    }

}
