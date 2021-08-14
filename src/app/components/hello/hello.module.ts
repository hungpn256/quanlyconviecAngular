import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {HelloComponent} from './hello.component';
import { counterReducer } from "./store/hello.reducer";

@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule,StoreModule.forFeature("counter",counterReducer)],
  exports: [HelloComponent],
})
export class HelloModule{}
