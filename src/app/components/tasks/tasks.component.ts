import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() status: string;
  @Input() name: string;

  constructor() { 
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
  displayInfo(){
    alert("Whatever");
  }
}
