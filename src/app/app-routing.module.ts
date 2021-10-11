import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./pages/search-page/search-page.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'video-player',
    loadChildren: () => import('./pages/video-player/video-player.module').then((m) => m.VideoPlayerModule),
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/comments-page/comments-page.module').then((m) => m.CommentsPageModule),
  },
  {
    path: '**',
    redirectTo: 'search',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
