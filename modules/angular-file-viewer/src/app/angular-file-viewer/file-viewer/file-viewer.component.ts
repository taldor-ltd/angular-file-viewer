import { Component, Input } from '@angular/core';
import { FileMimeType } from './file-mime-type';

@Component({
  selector: 'tld-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent {
  fileMimeType = FileMimeType;
  @Input() type: FileMimeType;
  @Input() src: any;
  @Input() pdfZoom = 1;
}
