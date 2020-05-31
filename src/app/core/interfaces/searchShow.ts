// http://api.tvmaze.com/shows/1
import { IShow } from './show';

export interface ISearchShow {
  score: number;
  show: IShow;
}
