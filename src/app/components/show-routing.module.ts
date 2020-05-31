import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvmazePageComponent } from './tvmaze-page/tvmaze-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { CastListComponent } from './cast-list/cast-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shows'
  },
  {
    path: 'shows',
    component: TvmazePageComponent
  },
  {
    path: 'show/:id',
    component: ShowPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
      },
      {
        path: 'main',
        component: ShowDetailsComponent,
      },
      {
        path: 'episodes',
        component: EpisodeListComponent,
      },
      {
        path: 'casts',
        component: CastListComponent,
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
