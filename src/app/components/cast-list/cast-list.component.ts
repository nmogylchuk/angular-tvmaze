import { Component, OnInit } from '@angular/core';
import { IShowCast } from './../../core/interfaces/cast';
import { ShowService } from './../../core/service/show.service';
import { ActivatedRoute } from '@angular/router';
import { ShowDetailsService } from './../show-page/show-page.component';
import { Observable } from 'rxjs';
import { IShow } from 'src/app/core/interfaces/show';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.scss']
})
export class CastListComponent implements OnInit {
  casts: IShowCast[];
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
      this.showService.fetchShowCasts(2).subscribe(casts => {
        this.casts = casts;
      });
    });
  }
}
