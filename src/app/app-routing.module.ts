import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvmazePageComponent } from './components/tvmaze-page/tvmaze-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'show'
  },
  {
    path: 'show',
    component: TvmazePageComponent
  },
  {
    path: 'show/:id',
    component: ShowDetailsComponent
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
