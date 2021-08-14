import { createReducer, on } from "@ngrx/store";
import {decrement,increment,increment2} from './hello.action';

export interface CounterState{
  value: number;
  incrementCount: number;
  decrementCount: number;
}
export const initialState: CounterState = {
  incrementCount: 0,
  decrementCount: 0,
  value: 1,

};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    value: state.value + 1,
    incrementCount: state.incrementCount + 1,
  })),
  on(decrement, (state) => ({
    ...state,
    value: state.value-1,
    decrementCount: state.decrementCount + 1,
  })),
  on(increment2,(state)=>({
    ...state,
    value: state.value + 2
  }))
);
