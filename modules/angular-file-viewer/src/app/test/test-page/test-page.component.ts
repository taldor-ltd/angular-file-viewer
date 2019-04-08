import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tld-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  src: string;
  type: string;

  constructor() { }

  ngOnInit() {
  }

  changeSource(src: string, type: string) {
    this.src = src;
    this.type = type;
  }
}
