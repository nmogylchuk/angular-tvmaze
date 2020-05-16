import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IShow } from './../interfaces/show';

@Injectable({
  providedIn: 'root'
})

export class ShowService {
  public shows: IShow[] = [];

  constructor(private http: HttpClient) {}

  fetchShows(): Observable<IShow[]> {
    return this.http
    .get<IShow[]>(`http://api.tvmaze.com/shows`)
    .pipe(tap(shows => (this.shows = shows)));
  }

  fetchShow(id: number): Observable<IShow> {
    return this.http.get<IShow>(`http://api.tvmaze.com/shows/${ id }`);
  }
}
