import { createAction,props } from "@ngrx/store";
import {ITask} from '../../model/task.model'


export const addTask = createAction('add-task',props<{payload:ITask}>());
export const deleteTask = createAction('delete-task',props<{id:string}>());
export const getTask = createAction('get-task',props<{payload:ITask[]}>());
export const updateTask = createAction('update-task',props<{payload:ITask}>());
