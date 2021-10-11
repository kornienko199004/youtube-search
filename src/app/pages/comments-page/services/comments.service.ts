import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { CommentData, CommentRawData } from 'src/app/shared/models';
import { SharedHttpService } from 'src/app/shared/services/shared-http.service';

@Injectable()
export class CommentsService {
  comments$: Observable<CommentData[]>;

  constructor(private http: SharedHttpService) { }

  loadData(videoId: string): void {
    this.comments$ = this.http.getComments(videoId)
      .pipe(
        catchError(() => of([])),
        map(this.getCommentData),
        shareReplay()
      );
  }

  private getCommentData(res: { items: CommentRawData[] }): CommentData[] {
    return res.items.map((item: CommentRawData) => item.snippet?.topLevelComment?.snippet);
  }
}
