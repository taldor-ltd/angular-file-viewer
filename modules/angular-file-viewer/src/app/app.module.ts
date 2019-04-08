import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestPageComponent } from './test/test-page/test-page.component';
import { AngularFileViewerModule } from './angular-file-viewer/angular-file-viewer.module';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFileViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
