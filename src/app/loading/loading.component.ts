import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { selectorLoading } from '../store/loading/loading.selector';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})

export class LoadingComponent implements OnInit {
  readonly loading = this.store.select(selectorLoading);
  constructor(private store: Store) { }

  ngOnInit(): void {
  }
}
