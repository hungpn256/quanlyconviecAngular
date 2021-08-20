import { Component, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map, pluck } from 'rxjs/operators';
import { ITask } from '../model/task.model';
import { callApi } from '../service/callApi.service';
import {Store} from '@ngrx/store'
import { getTask, deleteTask } from '../store/task/task.action';
import { selectorTask } from '../store/task/task.selector';
import { Router } from '@angular/router';
import { hideLoading, showLoading } from '../store/loading/loading.action';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit,OnInit {
  @ViewChild('search', { static: true }) search: ElementRef;
  readonly taskList = this.store.select(selectorTask);
  constructor(private api:callApi,private readonly store:Store, private readonly router:Router) {
  }
  ngOnInit(): void {
    this.store.dispatch(showLoading());
    this.api.getTask().pipe(
      delay(1000),
    ).subscribe((res:ITask[])=>{
      this.store.dispatch(getTask({payload:res}));
      this.store.dispatch(hideLoading());
    })
  }
  ngAfterViewInit() {

    fromEvent<KeyboardEvent>(this.search.nativeElement, 'keyup')
      .pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        pluck('target','value'),
        map((value:string)=>{
          return this.api.getTask(value)
        })
      )
      .subscribe((e)=>e.subscribe((res:ITask[])=>{
        this.store.dispatch(getTask({payload:res}));
      }));
  }
  del(id){
    this.api.deleteTask(id).subscribe(
      (onsnapshot)=>{},
      ()=>{
        console.log('error');
      },
      ()=>{
        this.store.dispatch(deleteTask({id}));
      })
  }
  navigateUpdate(id:string){
    this.router.navigate(['/update-task/'+id])
  }
}
