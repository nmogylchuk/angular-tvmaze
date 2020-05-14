import { Component, Input, OnInit } from '@angular/core';
import { IShow } from './../../core/interfaces/show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  @Input() shows: IShow[];

  constructor() {}

  ngOnInit() {
    this.shows = this.shows as IShow[];
  }
}
