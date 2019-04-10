import { Component, OnInit, Input } from '@angular/core';
import { FileMimeType } from './file-mime-type';

@Component({
  selector: 'tld-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {
  fileMimeType = FileMimeType;
  @Input() type: FileMimeType;
  @Input() src: any;

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
