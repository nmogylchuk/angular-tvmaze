// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {TabMenuModule} from 'primeng/tabmenu';

// Components
import { AppComponent } from './app.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowItemComponent } from './components/show-item/show-item.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShowActionComponent } from './components/show-action/show-action.component';
import { TvmazePageComponent } from './components/tvmaze-page/tvmaze-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowLoadingComponent } from './components/show-loading/show-loading.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { EpisodeItemComponent } from './components/episode-item/episode-item.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { ShowPageComponent } from './components/show-page/show-page.component';
import { CastItemComponent } from './components/cast-item/cast-item.component';
import { CastListComponent } from './components/cast-list/cast-list.component';
// import { ShowsFilterPipe } from './core/pipes/show-filter';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    ShowItemComponent,
    HeaderComponent,
    FooterComponent,
    ShowActionComponent,
    TvmazePageComponent,
    NotFoundComponent,
    ShowLoadingComponent,
    ShowDetailsComponent,
    EpisodeItemComponent,
    EpisodeListComponent,
    ShowPageComponent,
    CastItemComponent,
    CastListComponent
    // ShowsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
