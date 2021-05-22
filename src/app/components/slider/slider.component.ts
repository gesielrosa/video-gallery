import { ChangeDetectionStrategy, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {

  constructor(
    private _el: ElementRef
  ) {
  }
  @HostListener('mousewheel', ['$event'])
  public scrollHorizontal(event: WheelEvent): void {
    this._el.nativeElement.scrollLeft += event.deltaY;
    event.preventDefault();
  }

}
