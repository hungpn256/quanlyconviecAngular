import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskGuard } from './guards/tasks.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'create-task',
    component: CreateTaskComponent,
    canDeactivate:[TaskGuard]
  },
  {
    path:'update-task/:id',
    component: CreateTaskComponent
  },
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
