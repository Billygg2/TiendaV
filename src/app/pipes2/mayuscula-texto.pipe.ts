import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculaTexto'
})
export class MayusculaTextoPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
