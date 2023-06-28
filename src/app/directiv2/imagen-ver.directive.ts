import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appImagenVer]'
})
export class ImagenVerDirective implements OnChanges {
  @Input('appImagenVer') appPreviewImage = '';

  constructor(private el: ElementRef) {}

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
