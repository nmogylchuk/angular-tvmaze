import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRoutingModule } from './show-routing.module';
import { TabMenuModule } from "primeng/tabmenu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../core/material/material.module';

import { ShowListComponent } from './show-list/show-list.component';
import { ShowItemComponent } from './show-item/show-item.component';
import { ShowActionComponent } from './show-action/show-action.component';
import { TvmazePageComponent } from './tvmaze-page/tvmaze-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowLoadingComponent } from './show-loading/show-loading.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { EpisodeItemComponent } from './episode-item/episode-item.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { CastItemComponent } from './cast-item/cast-item.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    ShowListComponent,
    ShowItemComponent,
    ShowActionComponent,
    TvmazePageComponent,
    NotFoundComponent,
    ShowLoadingComponent,
    ShowDetailsComponent,
    EpisodeItemComponent,
    EpisodeListComponent,
    ShowPageComponent,
    CastItemComponent,
    CastListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TabMenuModule,
    ShowRoutingModule,
    SharedModule,
    CoreModule,
    MaterialModule
  ]
})
export class ShowModule {
}
