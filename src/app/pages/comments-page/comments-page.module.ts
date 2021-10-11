import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsPageRoutingModule } from './comments-page-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentCardComponent
  ],
  imports: [
    CommonModule,
    CommentsPageRoutingModule,
    MatCardModule,
  ],
})
export class CommentsPageModule { }
