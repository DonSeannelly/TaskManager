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
        // TODO save the recieved task to the library. Consideration, if the task has an ID use an update query
        // instead of create
    }
}