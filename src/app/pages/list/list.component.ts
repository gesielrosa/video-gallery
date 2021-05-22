import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { IMovie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  public movies: IMovie[];

  constructor(
    private _moviesService: MoviesService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this._getMovies();
  }

  private _getMovies(): void {
    this._moviesService.list()
      .subscribe(resp => {
          this.movies = resp;
        },
        (error) => console.error(error),
        () => this._detectChanges())
  }

  public trackBy(index: number, item: IMovie): string {
    return item.uuid;
  }

  private _detectChanges(): void {
    this._cdr.detectChanges();
  }

}
