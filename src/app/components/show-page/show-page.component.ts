import { Component, Injectable, OnInit } from '@angular/core';
import { IShow } from 'src/app/core/interfaces/show';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from './../../core/service/show.service';
import { MenuItem } from "primeng/api";

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
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss'],
  providers: [ShowDetailsService]
})
export class ShowPageComponent implements OnInit {
  menuItems: MenuItem[];
  show$: Observable<IShow>;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private showDetailsService: ShowDetailsService
  ) {
    this.menuItems = [
      { label: 'main', routerLink: 'main', icon: 'fa fa-fw fa-bookmark-o'},
      { label: 'episodes', routerLink: 'episodes', icon: 'fa fa-fw fa-calendar' },
      { label: 'cast', routerLink: 'casts', icon: 'fa fa-fw fa-user-circle' }
    ];

    this.route.params.subscribe(params => {
      console.log('Fetch show data by id: ' + params['id']);
      console.log(params);
      this.show$ = this.showService.fetchShow(params['id']);
      this.show$.subscribe(show => {
        this.showDetailsService.addData(show);
      });
    });
  }

  ngOnInit() {}
}
