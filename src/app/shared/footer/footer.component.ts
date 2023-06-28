import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy {

  ngOnDestroy(): void {
    console.log('El componente se está destruyendo. Realizando acciones antes de destruir...');
  }

  destroyComponent(): void {
    console.log('El usuario hizo clic en el botón para cerrar el componente.');
    this.ngOnDestroy();
  }

}
