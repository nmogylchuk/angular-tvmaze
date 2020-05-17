import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvmazePageComponent } from './components/tvmaze-page/tvmaze-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { ShowPageComponent } from './components/show-page/show-page.component';

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
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
