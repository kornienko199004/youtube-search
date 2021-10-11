import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _loaderVisibility$ = new Subject<boolean>();
  loaderVisibility$ = this._loaderVisibility$.asObservable();

  show(): void {
    setTimeout(() => {
      this._loaderVisibility$.next(true);
    });
  }

  hide(): void {
    setTimeout(() => {
      this._loaderVisibility$.next(false);
    });
  }
}
