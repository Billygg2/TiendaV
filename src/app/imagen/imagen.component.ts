import { Component } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent {
  anchoImagen = 200;

  ampliar() {
    if (this.anchoImagen < 500) {
      this.anchoImagen += 50;
    }
  }

  reducir() {
    if (this.anchoImagen > 100) {
      this.anchoImagen -= 50;
    }
  }
  
}

