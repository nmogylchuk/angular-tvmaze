import { Component, OnInit, Input } from '@angular/core';
import { IShowCast } from './../../core/interfaces/cast';

@Component({
  selector: 'app-cast-item',
  templateUrl: './cast-item.component.html',
  styleUrls: ['./cast-item.component.scss']
})
export class CastItemComponent implements OnInit {
  @Input() cast: IShowCast;

  constructor() { }

  ngOnInit(): void {
  }

}
