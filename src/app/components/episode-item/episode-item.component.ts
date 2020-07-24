import { Component, OnInit, Input } from '@angular/core';
import { IShowEpisode } from './../../core/interfaces/episode';

@Component({
  selector: 'app-episode-item',
  templateUrl: './episode-item.component.html',
  styleUrls: ['./episode-item.component.scss']
})
export class EpisodeItemComponent implements OnInit {

@Input() episode: IShowEpisode;

  constructor() { }

  ngOnInit(): void {
  }

}
