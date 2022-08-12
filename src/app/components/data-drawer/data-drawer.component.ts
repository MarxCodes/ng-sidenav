import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-drawer',
  templateUrl: './data-drawer.component.html',
  styleUrls: ['./data-drawer.component.scss']
})
export class DataDrawerComponent implements OnInit {
  @ViewChild('textieRef', { static: true }) textieRef!: ElementRef;
  @ViewChild('content', { static: true }) _content!: ElementRef;


  // @ViewChild('')
  constructor() { }

  ngOnInit(): void {
    console.log('DE CONTENT: ', this._content)
  }

}
