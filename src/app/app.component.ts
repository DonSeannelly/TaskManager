import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world!';
  activeTasks = []
  inactiveTasks = []
  
  constructor(){
    this.activeTasks[0] = {
      name: "temp1",
      status:"active",
      id:"0"
    };
    this.inactiveTasks[0] = {
      name: "temp2",
      status:"inactive",
      id:"1"
    };
    this.activeTasks[1] = {
      name: "temp3",
      status:"bugged",
      id:"2"
    };
  }

  // we are looking to read in data about tasks in this component
}
