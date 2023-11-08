import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string, completed: boolean }[] = [];
  @Input() filterCompleted: boolean = false;
  @Input() showAll: boolean = false;

  filteredTasks(): { name: string, completed: boolean }[] {
    if (this.showAll) {
      return this.tasks; // Mostrar todas las tareas
    } else if (this.filterCompleted) {
      return this.tasks.filter(task => task.completed);
    } else {
      return this.tasks.filter(task => !task.completed);
    }
  }
}
