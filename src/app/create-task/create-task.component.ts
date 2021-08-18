import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ITask } from '../model/task.model';
import { callApi } from '../service/callApi.service';
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
    if(this.route.snapshot.params.id){
      this.api.updateTask({id:this.route.snapshot.params.id,...this.form.value}).subscribe({
        next:(data:ITask)=>{
          this.form.setValue({
            name:'',
            description:'',
            status:0
          })
          this.router.navigate(['/']);
        }
      });
    }else{
      this.api.postTask(this.form.value).subscribe({
        next:(data:ITask)=>{
          this.form.setValue({
            name:'',
            description:'',
            status:0
          })
          this.router.navigate(['/']);
        }
      });
    }
  }
  checkDeactivate(){
    return of(Object.values(this.form.value).join('')==='0' || confirm('Do you want to cancel changes?'));
  }
}
