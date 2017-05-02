import { Component, OnInit } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = []

  //These are also for testing purposes. They are used 
  users = ["Lydia","Nick","Adam"]
  users2 = []
  

  constructor() { 
    function task(name, workers, status){
      this.name = name;
      this.workers = workers;
      this.status = status;

      //Sets which list the task appears in.
      if(status == "active")
        this.active = true;
      else
        this.active = false;

      function setActive(active){
        this.active = active;
      }

      function addWorker(worker){
        this.workers[this.workers.lenth] = worker;
      }

      function removeWorker(worker){
        for(var i = 0; i < this.workers.length; i++){
          //If the worker exists in the array, remove the worker
          if(this.workers[i] == worker){
            if(i < this.workers.length)
              this.workers.splice(i,1);
            else
              this.workers.pop();
          }
        }
      }
    }

    //These are for testing purposes. 
    this.tasks[0] = new task("Test1",this.users, "inactive");
    this.tasks[1] = new task("Test2",this.users2, "active");
    this.tasks[2] = new task("Test3",this.users2, "bugged");

  }

  ngOnInit() {
    this.tasks;
  }


  //The method is ran after the task is clicked.
  displayInfo(){
    alert("Whatever");
  }

}
