import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {TaskService} from './tasks.service';
@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    @Input() status: string;
    @Input() name: string;
    task;
    // TODO formGroup is used with two way data binding. You bind to an object which is represented in a model (see html).
    // Please check it out. Consider looking into form validation.
    form: FormGroup;

    constructor(private _builder: FormBuilder,
                private service: TaskService) {

        this.form = this._builder.group({
            status: [''],
            name: ['']
        });
        // function task(name, workers){
        //   this.workers = workers;

        //   function addWorker(worker){
        //     this.workers[this.workers.lenth] = worker;
        //   }

        //   function removeWorker(worker){
        //     for(var i = 0; i < this.workers.length; i++){
        //       //If the worker exists in the array, remove the worker
        //       if(this.workers[i] == worker){
        //         if(i < this.workers.length)
        //           this.workers.splice(i,1);
        //         else
        //           this.workers.pop();
        //       }
        //     }
        //   }
        // }

        // we are looking to update data from a form in this component
    }

    ngOnInit() {
    }


    //The method is ran after the task is clicked.
    displayInfo() {
        alert("Whatever");
    }

    save() {
        // TODO logic to save(update) a task utilize a service route here. Data is passed by passing the task object
        this.service.saveTasks(this.task);
    }
}
