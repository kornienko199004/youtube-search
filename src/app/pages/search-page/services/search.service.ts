import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { VideoData } from 'src/app/shared/models';
import { SharedHttpService } from 'src/app/shared/services/shared-http.service';
import { VideoPaginationData } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  videos$: Observable<VideoData[]>;
  private _paginationData$ = new Subject<VideoPaginationData>();
  paginationData$ = this._paginationData$.asObservable();

  constructor(private http: SharedHttpService) { }

  loadData(search: string, pageToken?: string): void {
    this.videos$ = this.http.getVideos(search, pageToken).pipe(
      tap((res: { nextPageToken?: string, prevPageToken?: string, items: any[] }) => {
        this._paginationData$.next({ nextPageToken: res.nextPageToken, prevPageToken: res.prevPageToken, search });
      }),
      map((res) => res.items
    ), shareReplay());
  }

  reset(): void {
    this.videos$ = of([]);
    this._paginationData$.next(null);
  }
}
