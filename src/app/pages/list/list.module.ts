import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { SliderModule } from '../../components/slider/slider.module';
import { SlideModule } from '../../components/slide/slide.module';
import { PipesModule } from '../../pipes/pipes.module';
import { MovieDetailsModule } from '../../components/movie-details/movie-details.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: ListComponent
    }]),
    CommonModule,
    SliderModule,
    SlideModule,
    PipesModule,
    MovieDetailsModule
  ],
  providers: []
})
export class ListModule {
}
