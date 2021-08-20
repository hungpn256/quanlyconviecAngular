import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LoadingComponent } from './loading/loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  // @ViewChild('loading', { static: true }) load:LoadingComponent;
  // ngAfterViewInit(){
  //   console.log(this.load.showLoading(),'sdasda')
  // }
}
