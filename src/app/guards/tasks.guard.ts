import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { CheckDeactivate } from '../model/check-deactive.model';

@Injectable({
  providedIn: 'root'
})
export class TaskGuard implements  CanDeactivate<CheckDeactivate> {
  constructor() {
  }
  canDeactivate(
    component: CheckDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> {
    return component.checkDeactivate(currentRoute, currentState, nextState);
  }
}
