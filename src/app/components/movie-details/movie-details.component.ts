import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { IMovie } from '../../interfaces/movie.interface';
import { fadeIn } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  animations: [fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent {

  public movie: IMovie;

  public show: boolean = false;

  constructor(
    private _cdr: ChangeDetectorRef
  ) {
  }

  public open(movie: IMovie): void {
    this.movie = movie;
    this.show = true;
    this._detectChanges();
  }

  public close(): void {
    this.show = false;
    this.movie = null;
    this._detectChanges();
  }

  private _detectChanges(): void {
    this._cdr.detectChanges();
  }

}
