import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';




@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskForm!: FormGroup;
  taskList: any = []
  constructor(private formBuilder: FormBuilder,
    private taskService: TaskService, private router: Router,
  ) { }

  ngOnInit(): void {
    this.getTasks();
    const editedTask = history.state.task;
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      status: [''],
      _id: [''],
    });

    if (editedTask) {
      this.taskForm.patchValue(editedTask);
    }

  }

  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return
    }
    this.taskForm.value._id = uuidv4();
    this.taskService.addTask(this.taskForm.value);
    const data = { key: 'value' };
    localStorage.setItem('myData', JSON.stringify(data));
    this.router.navigate(['/tasks-list']);
  }

  onUpdate() {
    const { _id } = this.taskForm.value;
    const index = this.taskList.findIndex((t: any) => t._id === _id);
    if (index !== -1) {
      this.taskList.splice(index, 1, this.taskForm.value);
    }
    this.router.navigate(['/tasks-list']);
  }

  getTasks() {
    this.taskList = this.taskService.getTasks();

  }


}
