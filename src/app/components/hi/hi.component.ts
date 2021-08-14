import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../hello/store/hello.action';
import { selectDecrementCount, selectIncrementCount, selectValue } from '../hello/store/hello.selector';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent implements OnInit {

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
