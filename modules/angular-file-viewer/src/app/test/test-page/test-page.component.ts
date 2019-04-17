import { Component } from '@angular/core';

import { FileMimeType } from 'src/app/angular-file-viewer/file-viewer/file-mime-type';

@Component({
  selector: 'tld-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent {
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
