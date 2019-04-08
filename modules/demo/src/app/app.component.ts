import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  src: string;
  type: string;

  changeSource(src: string, type: string) {
    this.src = src;
    this.type = type;
  }
}
