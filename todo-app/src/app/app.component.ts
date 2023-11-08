import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterCompleted: boolean = false;
  filterAll: boolean = false;

  tasks: { name: string, completed: boolean }[] = [];

  addTask(task: { name: string, completed: boolean }) {
    this.tasks.push(task);
  }
}
