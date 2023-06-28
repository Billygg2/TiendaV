import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../models/models.module';
import { ProductoService } from '../servicio/prodcuto.service';
import { DataService } from '../servicio2/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private _nuevoProductoAgregado = false;

  @Input() set nuevoProductoAgregado(value: boolean) {
    this._nuevoProductoAgregado = value;
    if (value) {
      console.log("Se ha agregado un nuevo producto");
    }
  }

  get nuevoProductoAgregado(): boolean {
    return this._nuevoProductoAgregado;
  }

  constructor(private miServicio:ProductoService, private productosServicio:DataService){
  }

  ngOnInit(): void {
    this.productos=this.productosServicio.productos;
  }

  productos: Producto[] = []

  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    imagen: '',
    descripcion: ''
  };

  agregarProducto() {
    this.productosServicio.agregarProducto(this.nuevoProducto);
    this.miServicio.muestra("Nuevo producto agregado: " + this.nuevoProducto.nombre);
    this.nuevoProductoAgregado = true;
    this.nuevoProducto = {
      id: 0,
      nombre: '',
      precio: 0,
      imagen: '',
      descripcion: ''
    };
  }

  compras: Producto[] = [];
  totalPrecio = 0;

  agregarAlCarrito(producto: Producto) {
    this.compras.push(producto);
    this.calcularTotalPrecio();
  }

  eliminarDelCarrito(index: number) {
    this.compras.splice(index, 1);
    this.calcularTotalPrecio();
  }

  calcularTotalPrecio() {
    let total = this.compras.reduce((total, compra) => total + compra.precio, 0);
    if (this.compras.length >= 3) {
      total *= 0.8;
    }
    this.totalPrecio = total;
  }

}
