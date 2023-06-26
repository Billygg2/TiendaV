import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() backgroundColor: string;
  @Output() backgroundColorChange = new EventEmitter<string>();

  constructor() {
    this.backgroundColor = 'rgb(11, 30, 73);'; 
  }

  onBackgroundColorChange(value: string) {
    this.backgroundColor = value;
    this.backgroundColorChange.emit(value);
  }

}
