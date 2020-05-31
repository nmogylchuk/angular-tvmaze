import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IShow } from './../interfaces/show';
import { IShowEpisode } from './../interfaces/episode';
import { IShowCast } from './../interfaces/cast';

@Injectable({
  providedIn: 'root'
})

export class ShowService {
  public shows: IShow[] = [];

  constructor(private http: HttpClient) {}

  fetchShows(): Observable<IShow[]> {
    return this.http.get<IShow[]>(`http://api.tvmaze.com/shows`)
    .pipe(tap(shows => (this.shows = shows)));
  }

  fetchShow(id: number): Observable<IShow> {
    return this.http.get<IShow>(`http://api.tvmaze.com/shows/${ id }`);
  }

  fetchShowEpisodes(id: number): Observable<IShowEpisode[]> {
    return this.http.get<IShowEpisode[]>(`http://api.tvmaze.com/shows/${ id }/episodes`);
  }

  fetchShowCasts(id: number): Observable<IShowCast[]> {
    return this.http.get<IShowCast[]>(`http://api.tvmaze.com/shows/${ id }/cast`);
  }

  fetchSearchShow(query: string): Observable<IShow[]> {
    return this.http.get<IShow[]>(`http://api.tvmaze.com/search/shows?q=${ query }`);
  }
}
