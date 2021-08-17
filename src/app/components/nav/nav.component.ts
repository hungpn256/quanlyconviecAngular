import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'nav-app',
  templateUrl:'./nav.component.html'
})
export class NavComponent{
  constructor(private readonly router:Router){

  }
  navigate(route:string){
    this.router.navigate([route]);
  }
}
