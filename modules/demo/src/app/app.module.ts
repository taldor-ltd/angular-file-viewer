import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFileViewerModule } from '@taldor-ltd/angular-file-viewer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFileViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
