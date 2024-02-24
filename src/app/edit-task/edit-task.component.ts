import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  taskList: any = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskList = this.taskService.getTasks();

  }

  editItem(i: any) {
    this.router.navigate(['/create-task'], { state: { task: i } });
  }

}
