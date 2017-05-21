import {Injectable} from '@angular/core';

@Injectable()
export class TaskService
{
    getTasks()
    {
        // TODO get task logic.
        /*
            here you will utilize an api route to get the data from a database. This is where a server side language
            comes in to service requests and send responses. Look into rxjs/subscriptions and receiving a json response
         */
    }

    saveTasks(task: any)
    {
        alert(task.name +" "+task.status)
        document.getElementById(task.id).style.display='none';
    }
}