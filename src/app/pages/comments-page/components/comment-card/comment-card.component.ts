import { Component, Input } from '@angular/core';
import { CommentData } from 'src/app/shared/models';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {
  @Input() comment: CommentData;
}
