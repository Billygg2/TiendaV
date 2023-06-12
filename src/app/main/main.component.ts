import { Component } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Infinix NOTE 30 Pro',
      imagen: 'assets/img/note30pro_list.png',
      precio: 259.00
    },
    {
      id: 2,
      nombre: 'HOT 20S | FREE FIRE',
      imagen:'assets/img/hot20s_list.png',
      precio: 229.00
    },
    {
      id: 3,
      nombre: 'HOT 20 | FREE FIRE',
      imagen:'assets/img/hot20_list.png',
      precio: 159.00
    },
    {
      id: 4,
      nombre: 'HOT 20i',
      imagen:'assets/img/hot20i_list.png',
      precio: 152.86
    },
    {
      id: 5,
      nombre: 'ZERO 5G',
      imagen:'assets/img/zero5g.jpg',
      precio: 287.55
    },
    {
      id: 6,
      nombre: 'NOTE 10',
      imagen:'assets/img/Note10.jpg',
      precio: 251.99
    },
    {
      id: 7,
      nombre: 'SMART 6HD',
      imagen:'assets/img/smart6hd.jpg',
      precio: 114.00
    },
    {
      id: 8,
      nombre: 'HOT 10',
      imagen:'assets/img/hot10.jpg',
      precio: 142.54
    },
  ]
}
