import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncarTexto'
})
export class TruncarTextoPipe implements PipeTransform {


  transform(value: string, length = 30): string {
    if (value.length > length) {
      return value.substr(0, length) + '...';
    }
    return value;
  }
  
}
