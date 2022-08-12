import { Component, OnInit } from '@angular/core';
import { DrawerMode } from '../nav-drawer/nav-drawer.component';

@Component({
  selector: 'app-alt',
  templateUrl: './alt.component.html',
  styleUrls: ['./alt.component.css']
})
export class AltComponent implements OnInit {

  mode: DrawerMode = 'over';
  position: 'start' | 'end' = 'end';

  constructor() { }

  ngOnInit(): void {
  }

}
