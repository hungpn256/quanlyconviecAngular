import { Component,OnInit } from '@angular/core';
import { VERSION } from '@angular/forms';
import { selectValue,selectDecrementCount,selectIncrementCount } from './store/hello.selector';
import {Store} from '@ngrx/store';
import { decrement, increment } from './store/hello.action';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit  {

readonly value$ = this.store.select(selectValue);
readonly incrementCount$ = this.store.select(selectIncrementCount);
readonly decrementCount$ = this.store.select(selectDecrementCount);

constructor(private readonly store: Store){}

ngOnInit(): void {}

decrement(){
  this.store.dispatch(decrement());
}
increment(){
  this.store.dispatch(increment());
}

}
