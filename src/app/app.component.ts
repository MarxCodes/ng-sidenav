import { Component, ContentChild, ElementRef, QueryList, ViewChild, OnInit } from '@angular/core';
import { DrawerMode, NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';
import * as svgMarkup from './svg-markup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ContentChild('drawer') _drawer!: NavDrawerComponent;
  // @ViewChild('container') container!: ElementRef;
  // _drawers = new QueryList<NavDrawerComponent>();
  // title = 'responsive-nav';
  // large = 'large';
  navigationList = [
    { title: 'Overview', route: '/home', icon: svgMarkup.svgMarkup[1] },
    { title: 'Jobs', route: '/alt', icon: svgMarkup.svgMarkup[4] },
    { title: 'Courses', route: 'home', icon: svgMarkup.svgMarkup[0] },
    { title: 'User', route: '/user', icon: svgMarkup.svgMarkup[3] },
    // { title: 'login', route: '/login', icon: svgMarkup.svgMarkup[4] },
    { title: 'login', route: '/saved', icon: svgMarkup.svgMarkup[2] }

  ];
  mode: DrawerMode = 'side';

  constructor() { }
  // this.containe
  // .dataset.state = 'large';
  // this./

  ngOnInit() {
    // this.container.nativeElement.dataset = 'large'
    // this.c
  }
}
