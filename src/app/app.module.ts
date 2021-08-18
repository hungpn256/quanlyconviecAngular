import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { taskReducer } from './store/task/task.reducer';
import { TaskGuard } from './guards/tasks.guard';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CreateTaskComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({task : taskReducer}),
    StoreDevtoolsModule.instrument({}),
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
