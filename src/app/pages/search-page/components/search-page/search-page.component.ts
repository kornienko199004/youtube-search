import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnDestroy, AfterViewInit {
  @ViewChild('searchControl', { static: true }) searchControl: ElementRef;

  search: string;

  private subscription = new Subscription();

  constructor(public ctrl: SearchService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.searchHandler();
  }

  private searchHandler(): void {
    this.subscription.add(
      fromEvent(this.searchControl.nativeElement, 'keyup')
        .pipe(
          debounceTime(200),
          distinctUntilChanged(),
          tap(() => {
            if (this.search?.length === 0) {
              this.ctrl.reset();
            }
          }),
          filter(() => this.search?.length > 0)
        )
        .subscribe(() => {
          this.ctrl.loadData(this.search);
        })
    );
  }
}
