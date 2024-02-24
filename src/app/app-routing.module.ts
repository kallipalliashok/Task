import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';


// app-routing.module.ts
const routes: Routes = [
  {
    path: 'tasks-list',
    component: TaskListComponent
  },
  {
    path: 'create-task',
    component: CreateTaskComponent
  },
  {
    path: 'edit-task',
    component: EditTaskComponent
  },
  {
    path: 'tasks-details',
    component: TaskDetailsComponent
  },
  {
    path: '',
    component: CreateTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
