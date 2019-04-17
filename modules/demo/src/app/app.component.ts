import { Component } from '@angular/core';

import { FileMimeType } from '@taldor-ltd/angular-file-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileMimeType = FileMimeType;
  src: string;
  type: FileMimeType;
  pdfZoom = 1;

  changeSource(src: string, type: FileMimeType) {
    this.src = src;
    this.type = type;
  }

  pdfZoomIn(): void {
    this.pdfZoom++;
  }

  pdfZoomOut(): void {
    if (this.pdfZoom > 1 ) {
      this.pdfZoom--;
    }
  }
}
