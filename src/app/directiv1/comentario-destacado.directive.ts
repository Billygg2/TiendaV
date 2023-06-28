import { ChangeDetectorRef, Directive, ElementRef, Input, OnChanges } from '@angular/core';

interface Coment {
  id: number;
  nombre: string;
  texto: string;
  fecha: Date;
  colorClass: string;
}

@Directive({
  selector: '[appComentarioDestacado]'
})
export class ComentarioDestacadoDirective implements OnChanges {
  @Input('appComentarioDestacado') comentario: Coment;

  constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) {
    this.comentario = { id: 0, nombre: '', texto: '', fecha: new Date(), colorClass: '' };
  }

  ngOnChanges() {
    if (this.comentario.texto.includes('Excelente')) {
      this.comentario.colorClass = 'bg-warning';
    } else {
      this.comentario.colorClass = 'bg-light';
    }

    this.elementRef.nativeElement.classList.add(this.comentario.colorClass);
    this.changeDetectorRef.detectChanges();
  }
}
