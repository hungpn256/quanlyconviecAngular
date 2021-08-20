import { createReducer, on } from "@ngrx/store";
import { hideLoading, showLoading } from "./loading.action";

export interface ILoading{
  loading:boolean;
}
export const initialState: ILoading = {
  loading:false
};

const reducer = createReducer(
  initialState,
  on(showLoading, (state,action:any) => {
    return {
      ...state,
      loading:true
    };
  }),
  on(hideLoading, (state,action:any) =>{
    return {
      ...state,
      loading:false
    }
  }),
);
export const loadingReducer = (state:ILoading,action:any)=> reducer(state,action);
