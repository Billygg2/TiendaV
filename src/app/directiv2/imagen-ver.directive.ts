import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[xd]'
})
export class ImagenVerDirective {
  @Input('xd') appPreviewImage: string = '';

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    if (this.appPreviewImage) {
      const img = new Image();
      img.src = this.appPreviewImage;
      img.onload = () => {
        this.el.nativeElement.src = img.src;
      };
    }
  }
}
