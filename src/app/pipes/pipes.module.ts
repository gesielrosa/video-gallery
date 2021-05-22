import { NgModule } from '@angular/core';

import { MaxLengthPipe } from './max-length.pipe';

@NgModule({
  declarations: [
    MaxLengthPipe
  ],
  exports: [
    MaxLengthPipe
  ]
})
export class PipesModule {
}
