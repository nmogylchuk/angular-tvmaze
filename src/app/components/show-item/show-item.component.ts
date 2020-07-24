import { Component, Input } from '@angular/core';
import { IShow } from './../../core/interfaces/show';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent {

  @Input() show: IShow;

  constructor() {
  }
}
