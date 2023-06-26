import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdcutoService {

  constructor() { }

  muestra(mensaje:string){
    alert(mensaje);
  }
}
