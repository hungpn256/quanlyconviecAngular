import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ITask } from '../model/task.model';
import { callApi } from '../service/callApi.service';
import { hideLoading, showLoading } from '../store/loading/loading.action';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit,OnDestroy {
  selectOption:string;
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(0),
  });
  editting = false;
  constructor(private api:callApi,private readonly store:Store, private router:Router, private route:ActivatedRoute) {

  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    if(this.route.snapshot.params.id){
      this.editting = true;
      this.api.getDetail(this.route.snapshot.params.id).subscribe((res:ITask)=>{
        this.form.setValue({
          name:res.name,
          description:res.description,
          status:res.status
        })
      })
    }

  }
  submit(){
    this.store.dispatch(showLoading())
    if(this.route.snapshot.params.id){
      this.api.updateTask({id:this.route.snapshot.params.id,...this.form.value}).pipe(delay(1000)).subscribe({
        next:(data:ITask)=>{
          this.form.setValue({
            name:'',
            description:'',
            status:0
          })
          this.store.dispatch(hideLoading())
          this.router.navigate(['/']);
        },
        error:()=>{
          this.store.dispatch(hideLoading())
        }
      });
    }else{
      this.api.postTask(this.form.value).pipe(delay(1000)).subscribe({
        next:(data:ITask)=>{
          this.form.setValue({
            name:'',
            description:'',
            status:0
          })
          this.store.dispatch(hideLoading())
          this.router.navigate(['/']);
        },
        error:()=>{
          this.store.dispatch(hideLoading())
        }
      });
    }
  }
  checkDeactivate(){
    return of(Object.values(this.form.value).join('')==='0' || confirm('Do you want to cancel changes?'));
  }
}
