import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterCompleted: string = 'all';

  tasks: { name: string, completed: boolean }[] = [];

  addTask(task: { name: string, completed: boolean }) {
    this.tasks.push(task);
  }
}
