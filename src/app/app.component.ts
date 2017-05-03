import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world!';
  activeTasks = []
  
  constructor(){
    this.activeTasks[0] = {
      name: "temp",
      status:"active"
    };
  }

  // we are looking to read in data about tasks in this component
}
