import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/hi/hi.component';

const routes: Routes = [
  {
    path:'hello',
    component: HelloComponent
  },
  {
    path:'hi',
    component: HiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
