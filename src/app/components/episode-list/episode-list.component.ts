import { Component, OnInit } from '@angular/core';
import { IShowEpisode } from './../../core/interfaces/episode';
import { ShowService } from './../../core/service/show.service';
import { ActivatedRoute } from '@angular/router';
import { ShowDetailsService } from './../show-page/show-page.component';
import { Observable } from 'rxjs';
import { IShow } from 'src/app/core/interfaces/show';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {
  episodes: IShowEpisode[];
  show$: Observable<IShow>;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private showDetailsService: ShowDetailsService
  ) {
    this.show$ = this.showDetailsService.show$;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // this.showId = params['id'];
      console.log(params);
      this.showService.fetchShowEpisodes(2).subscribe(episodes => {
        this.episodes = episodes;
      });
    });
  }
}
