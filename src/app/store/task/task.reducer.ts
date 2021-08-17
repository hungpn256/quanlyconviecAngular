import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { ITask } from "src/app/model/task.model";
import { addTask, deleteTask, getTask } from "./task.action";

export interface ITaskState{
  task: ITask[];
}
export const initialState: ITaskState = {
  task:[]
};

const reducer = createReducer(
  initialState,
  on(addTask, (state,action) => {
    return {
      ...state,
      task:[...state.task,action.payload]
    };
  }),
  on(getTask, (state,action:any) =>{
    return {
      ...state,
      task:action.payload
    }
  }),
  on(deleteTask, (state,action)=>{
    console.log(action);
    return {
      ...state,
      task:state.task.filter((t)=>t.id!==action.id)
    }
  })
);
export const taskReducer = (state:ITaskState,action:any)=> reducer(state,action);
