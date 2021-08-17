import { createFeatureSelector, createSelector } from "@ngrx/store";
import {ITaskState} from './task.reducer'

export const selectCounter = createFeatureSelector<ITaskState>("task");

export const selectorTask = createSelector(
  selectCounter,
  (state) => state.task
);
