import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  taskList: any = [];
  constructor(
    private taskService: TaskService

  ) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskList = this.taskService.getTasks();
    localStorage.setItem('myData', JSON.stringify(this.taskList));
  }

}
