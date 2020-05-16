import { Component, Injectable, OnInit } from '@angular/core';
import { IShow } from 'src/app/core/interfaces/show';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, tap, take } from 'rxjs/operators';
import { ShowService } from './../../core/service/show.service';

@Injectable()
export class ShowDetailsService {
  private show: Subject<IShow> = new BehaviorSubject<IShow>(null);

  get show$() {
    return this.show.asObservable();
  }

  addData(show: IShow) {
    this.show.next(show);
    console.log('Get show details end: ' + JSON.stringify(this.show));
  }
}

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
  providers: [ShowDetailsService]
})
export class ShowDetailsComponent implements OnInit {
  show$: Observable<IShow>;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private showDetailsService: ShowDetailsService
  ) {
    this.route.params.subscribe(params => {
      this.show$ = this.showService.fetchShow(params['id']);
      this.show$.subscribe(show => {
        this.showDetailsService.addData(show);
      });
    });
  }

  ngOnInit() {}
}
