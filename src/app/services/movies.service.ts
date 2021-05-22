import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IMovie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private _http: HttpClient
  ) {
  }

  public list(): Observable<IMovie[]> {
    return this._http.get<{ code: string, data: IMovie[] }>('./assets/json/movies.json')
      .pipe(map(response => response.data));
  }

}
