import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [CommentsService]
})
export class CommentsComponent {
  videoId: string;

  constructor(private route: ActivatedRoute, private router: Router, public http: CommentsService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.videoId = this.route.snapshot.queryParams.videoId;
    this.http.loadData(this.videoId);
  }
}
