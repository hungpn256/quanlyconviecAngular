import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITask } from '../model/task.model';

@Injectable({
  providedIn:'root'
})
export class callApi{
  private ip = 'http://localhost:3000';
  constructor(private http:HttpClient){
  }
  getTask(search?:string){
    return this.http.get(`${this.ip}/task${search?'?q='+search:''}`)
  }
  postTask(data:ITask){
    return this.http.post(`${this.ip}/task`,data)
  }
  updateTask(data:ITask){
    const id = data.id;
    data.id = undefined;
    return this.http.put(`${this.ip}/task/${id}`,data)
  }
  deleteTask(id:string){
    return this.http.delete(`${this.ip}/task/${id}`)
  }
  getDetail(id:string){
    return this.http.get(`${this.ip}/task/${id}`)
  }
}
