import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {
  taskList: any = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskList = this.taskService.getTasks();
    localStorage.setItem('myData', JSON.stringify(this.taskList));
  }

  editItem(i: any) {
    const index = this.taskList.findIndex((t: any) => t._id === i._id);
    i.status = 'Completed'
    if (index !== -1) {
      this.taskList.splice(index, 1, i);
    }
    this.router.navigate(['/tasks-list']);
  }


  deleteItem(i: any) {
    const index = this.taskList.findIndex((t: any) => t._id === i._id);
    if (index !== -1) {
      this.taskList.splice(index, 1);
    }
    this.router.navigate(['/tasks-list']);
  }

}
