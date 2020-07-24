import { Component, OnInit } from '@angular/core';
import { IShow } from 'src/app/core/interfaces/show';
import { Observable } from 'rxjs';
import { ShowDetailsService } from './../show-page/show-page.component';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  show$: Observable<IShow>;

  constructor(private showDetailsService: ShowDetailsService) {
    this.show$ = this.showDetailsService.show$;
  }

  ngOnInit() {}
}
