import { NgModule } from '@angular/core';

import { MovieDetailsComponent } from './movie-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieDetailsComponent
  ]
})
export class MovieDetailsModule {
}
