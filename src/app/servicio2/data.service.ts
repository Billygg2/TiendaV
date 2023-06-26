import { Injectable } from '@angular/core';
import { Producto } from '../models/models.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Infinix NOTE 30 Pro',
      imagen: 'assets/img/note30pro_list.png',
      precio: 259.00,
      descripcion: 'Pantalla: 6.67″, 1080 x 2400 pixels | HD+ Procesador: MediaTek Helio G99 2.00 GHz RAM: 16GB Almacenamiento: 256GB Incluye base de carga inalámbrica'
    },
    {
      id: 2,
      nombre: 'HOT 20S | FREE FIRE',
      imagen:'assets/img/hot20s_list.png',
      precio: 229.00,
      descripcion: 'Pantalla colorida 120 Hz 1080 x 2460 px (6.78") Memoria interna 128 GB memoria RAM 8 GB'
    },
    {
      id: 3,
      nombre: 'HOT 20 | FREE FIRE',
      imagen:'assets/img/hot20_list.png',
      precio: 159.00,
      descripcion: 'Procesador: MediaTek Helio G85 Memoria Interna: 128GB Memoria RAM: 11GB (6GB + 5GB extended RAM)'
    },
    {
      id: 4,
      nombre: 'HOT 20i',
      imagen:'assets/img/infinix_hot_20i.png',
      precio: 152.86,
      descripcion: 'Pantalla IPS de 6,6’’. Resolución 720x1612 RAM 6 GB. Almacenamiento 128 GB.'
    },
    {
      id: 5,
      nombre: 'ZERO 5G',
      imagen:'https://i0.wp.com/epicgeek.com.br/wp-content/uploads/2022/04/Infinix-Zero-5G.png',
      precio: 287.55,
      descripcion: 'Pantalla de 6.78" pulgadas. CPU Octa-core Cortex-A78  Cortex-A55 con memoria 128GB 8GB RAM.'
    },
    {
      id: 6,
      nombre: 'NOTE 10',
      imagen:'assets/img/Note10.png',
      precio: 251.99,
      descripcion: 'PANTALLA 6.8” Dynamic PROCESADOR Exynos 9825 RAM Y ALMACENAMIENTO 12 GB RAM 256/512 GB.'
    },
    {
      id: 7,
      nombre: 'SMART 6HD',
      imagen:'https://tecnogalaxy.com.ec/wp-content/uploads/2022/08/infinix_smart_6_hd_quito_ecuador.png',
      precio: 114.00,
      descripcion: 'Pantalla: 6.6″, 720 x 1600 pixels Procesador:Unisoc SC9863A 1.60 GHz RAM: 2GB Almacenamiento: 32GB'
    },
    {
      id: 8,
      nombre: 'HOT 10',
      imagen:'assets/img/hot10play.png',
      precio: 142.54,
      descripcion: 'Pantalla 6.6’’, Procesador Mediatek MT6762D Helio A25RAM 3 GB Almacenamiento 64 GB'
    },
  ]

  agregarProducto(prodcuto:Producto){
    this.productos.push(prodcuto);
  }
}
