import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('search', { static: true }) search: ElementRef;
  constructor() {
  }
  ngAfterViewInit() {
    fromEvent<KeyboardEvent>(this.search.nativeElement, 'keyup')
      .pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        tap((event: KeyboardEvent) => {
          console.log(event)
          console.log(this.search.nativeElement.value)
        })
      )
      .subscribe();
  }
}
