import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tld-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css']
})
export class FileViewerComponent implements OnInit {
  @Input() type: 'application/pdf' | 'image/jpeg' | 'image/png' | 'video/mp4';
  @Input() src: any;

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
