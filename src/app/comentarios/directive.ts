import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appComentarioDestacado]'
})
export class ComentarioDestacadoDirective implements OnChanges {
  @Input('appComentarioDestacado') palabrasClave: string[] = [];

  constructor(private elementRef: ElementRef) {}
  ngOnChanges(_changes: SimpleChanges) {
    const comentario = this.elementRef.nativeElement.textContent;
    const palabrasClaveEncontradas = this.palabrasClave.filter(palabra => comentario.includes(palabra));
    if (this.palabrasClave) {
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = null;
    }
    if (palabrasClaveEncontradas.length > 0) {
      palabrasClaveEncontradas.forEach(palabra => {
        comentario.replace(palabra, `<span class="destacado">${palabra}</span>`);
      });

      this.elementRef.nativeElement.innerHTML = comentario;
    }
  }
}
