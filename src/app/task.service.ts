import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: any[] = []; // You can replace 'any' with a Task interface

  constructor() { }

  // Method to get all tasks
  getTasks() {
    return this.tasks;
  }

  // Method to add a new task
  addTask(task: any) {
    this.tasks.push(task);
  }

  // Method to update a task
  updateTask(index: number, task: any) {
    this.tasks[index] = task;
  }

  // Method to delete a task
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
