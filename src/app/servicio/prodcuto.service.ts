import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  muestra(mensaje:string){
    alert(mensaje);
  }
}
