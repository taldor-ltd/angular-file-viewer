import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { FileViewerComponent } from './file-viewer/file-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  exports: [
    FileViewerComponent
  ],
  declarations: [
    FileViewerComponent
  ]
})
export class AngularFileViewerModule { }
