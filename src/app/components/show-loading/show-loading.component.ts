import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShowService } from './../../core/service/show.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-show-loading',
  templateUrl: './show-loading.component.html',
  styleUrls: ['./show-loading.component.scss']
})
export class ShowLoadingComponent implements OnInit {

  @Output() load = new EventEmitter();

  constructor(public showService: ShowService) {}

  ngOnInit(): void {
    this.showService
      .fetchShows()
      .pipe(delay(100))
      .subscribe(() => {
        this.loadShows();
      });
  }

  loadShows() {
    this.load.emit();
  }
}
