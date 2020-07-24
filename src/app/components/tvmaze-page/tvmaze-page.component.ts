import { Component, OnInit } from '@angular/core';
import { ShowService } from './../../core/service/show.service';
import { IShow } from './../../core/interfaces/show';

@Component({
  selector: 'app-tvmaze-page',
  templateUrl: './tvmaze-page.component.html',
  styleUrls: ['./tvmaze-page.component.scss']
})
export class TvmazePageComponent implements OnInit {
  public shows: IShow[];
  public loading: boolean;

  constructor(public showService: ShowService) {}

  ngOnInit() {
    this.loading = true;
  }

  loadShows() {
    this.loading = false;
    this.shows = this.showService.shows;
  }

  onSearchStart() {
    this.loading = true;
  }

  onSearchEmpty() {
    this.ngOnInit();
  }

  onSearchShow() {
    this.loadShows();
  }
}
