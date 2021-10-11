import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    VideoPlayerRoutingModule,
    YouTubePlayerModule
  ]
})
export class VideoPlayerModule { }
