<h1 align="center">File Viewer for Angular</h1>
<ul style="list-style:none;display:flex;justify-content:center;margin-bottom:30px">
  <li style="margin-right:10px;background-color:#236224;padding:2px 5px;border-radius:10px">PDF</li>
  <li style="margin-right:10px;background-color:#236224;padding:2px 5px;border-radius:10px">JPEG</li>
  <li style="margin-right:10px;background-color:#236224;padding:2px 5px;border-radius:10px">PNG</li>
  <li style="margin-right:10px;background-color:#236224;padding:2px 5px;border-radius:10px">MP4</li>
</ul>
<p align="center">
  <a href="https://www.npmjs.com/package/@taldor-ltd/angular-file-viewer">
    <img src="https://img.shields.io/npm/dt/@taldor-ltd/angular-file-viewer.svg" alt="downloads">
  </a>
  <a href="https://www.npmjs.com/package/@taldor-ltd/angular-file-viewe">
    <img src="https://badge.fury.io/js/%40taldor-ltd%2Fangular-file-viewer.svg" alt="npm version">
  </a>
</p>

### Demo
https://taldor-ltd.github.io/angular-file-viewer/

## Overview

* [Install](README.md#install)
* [Usage](README.md#usage)
* [Options](README.md#options)
* [Unsupported file types](README.md#Unsupported-file-types)

## Install

```
npm i @taldor-ltd/angular-file-viewer ng2-pdf-viewer
```

>Note: ng2-pdf-viewer is a dependency we're using to display PDF files.


## Usage

Add ```AngularFileViewerModule``` to your module's ```imports```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFileViewerModule } from '@taldor-ltd/angular-file-viewer';

import { AppComponent } from './app/app.component';

@NgModule({
  imports: [BrowserModule, AngularFileViewerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```

And then use it in your component

(PDF sample)

```typescript
import { Component } from '@angular/core';

import { FileMimeType } from '@taldor-ltd/angular-file-viewer';

@Component({
  selector: 'app-root',
  template: `
    <tld-file-viewer [src]="src" [type]="type"></tld-file-viewer>
  `
})
export class AppComponent {
  src = 'http://www.africau.edu/images/default/sample.pdf';
  type = FileMimeType.PDF;
}
```

## Options

| Property | Type | Required | Default |
| --- | ---- | --- | --- |
| [[src](README.md#src---string-UInt8Array)] | *string, UInt8Array* | Required | - |
| [[type](README.md#type---FileMimeType)] | *FileMimeType* | Required | - |
| [[pdfZoom](README.md#pdfZoom---number)] | *number* | Optional | 1 |

### [src] - *string, UInt8Array*

##### String
- pdf location as url
```
[src]="'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf'"
```
- pdf location as local file location
```
[src]="'assets/pdf/pdf-test.pdf'"
```
##### UInt8Array
- [*data url*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs#Syntax) as *UInt8Array*
```
[src]="'data:application/stream;base64,Hello%2C%20World!'"
```

### [type] - *FileMimeType*

FileMimeType is an enum exported from this package. It's values are:

* PDF = 'application/pdf'
* JPEG = 'image/jpeg'
* PNG = 'image/png'
* MP4 = 'video/mp4'

use it lis this:

```
type = FileMimeType.PDF
```

### [pdfZoom] - *number*

Change this property value to zoom in and out in pdf files.
Default value is 1.

````html
[pdfZoom]="1"
````

## Unsupported file types

An unsupported file type will display a default message:
`File type is not supported`

To override this message with any other content, just add a content to `tld-file-viewer` tag:

```html
<tld-file-viewer [src]="src" [type]="type">
  <h1 style="margin:auto;">some message</h1>
</tld-file-viewer>
```

NOTE: You have a file type you wish to display that this repository is not supporting yet, open it as an issue tagged with `enhancement` and we'll try to add it as fast as we can. If you need it asap, you can ask for a PR, we'll check it, and once it's verified we'll happily merge it.