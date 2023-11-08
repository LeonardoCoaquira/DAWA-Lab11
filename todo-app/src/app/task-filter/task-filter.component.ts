import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Input() filterCompleted: boolean = false;
  @Input() showAll: boolean = false;
  @Output() filterCompletedChange = new EventEmitter<boolean>();
  @Output() filterShowAll = new EventEmitter<boolean>();
  

  toggleFilter() {
    this.filterCompleted = !this.filterCompleted;
    this.filterCompletedChange.emit(this.filterCompleted);
  }
}
