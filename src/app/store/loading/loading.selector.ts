import { createFeatureSelector, createSelector } from "@ngrx/store";
import {ILoading} from './loading.reducer'

export const selectCounter = createFeatureSelector<ILoading>("loading");

export const selectorLoading = createSelector(
  selectCounter,
  (state) => state.loading
);
