import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { SliderModule } from '../../components/slider/slider.module';
import { SlideModule } from '../../components/slide/slide.module';
import { PipesModule } from '../../pipes/pipes.module';

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
    PipesModule
  ],
  providers: []
})
export class ListModule {
}
