import { createFeatureSelector, createSelector } from "@ngrx/store";
import {CounterState} from './hello.reducer';

export const selectCounter = createFeatureSelector<CounterState>("counter");

export const selectValue = createSelector(
  selectCounter,
  (counterState) => counterState.value

);

export const selectIncrementCount = createSelector(
  selectCounter,
  counterState => counterState.incrementCount

);

export const  selectDecrementCount = createSelector(
  selectCounter,
  (counterState) => counterState.decrementCount

);


