import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'tiendavirtual';
  myBackgroundColor = 'rgb(11, 30, 73);'; // definir la propiedad myBackgroundColor

  onBackgroundColorChange(value: string) {
    this.myBackgroundColor = value;
  }


}
