import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { DataContentComponent } from '../data-content/data-content.component';
import { DataDrawerComponent } from '../data-drawer/data-drawer.component';

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.scss']
})
export class DataContainerComponent implements AfterContentInit {
  @ContentChildren('enlargeAnimation') enlargeAnimation!: QueryList<DataDrawerComponent>;
  @ViewChild('textRef') textRef: any;
  large = 'large';
  small = 'small';
  containerView = 'large';
  _allDrawers!: QueryList<DataDrawerComponent>;
  _drawers = new QueryList<DataDrawerComponent>();
  @ContentChild(DataContentComponent) _content!: DataContentComponent;
  constructor(private router: Router) {
    // console.log(this.enlargeAsnimation.map(i => console.log(i)));
  }

  setTheFlip() {
    // this.containerFLIP(this.shrinkContainer, this.enlargeAnimation)
  }

  ngAfterContentInit(): void {
    this._allDrawers.changes
      .pipe(tap(drawer => console.log(drawer)))
      .subscribe((draw: QueryList<DataDrawerComponent>) => {
        console.log(draw)
      })
    // console.log(this.enlargeAnimation)
    this.router.events.subscribe((er) => {
      if (er instanceof NavigationEnd && er.url === '/alt') {
        console.log('alted');
        // this.containerFLIP(this.shrinkContainer, this.enlargeAnimation.nativeElement)
        // this.setTheFlip();
      }
    })

    console.log('textRef: ', this.textRef);
    console.log('call me what i am!: ', this.enlargeAnimation);
    console.log('CONTENT CONTAINER: ', this._content)

  }

  enlargeContainer() {
    this.containerView = 'large';
    // this.enlargeAnimation.nativeElement.dataset.state = this.containerView;
  }

  shrinkContainer() {
    this.containerView = 'small';
    // this.enlargeAnimation.nativeElement.dataset.set = this.containerView;
  }
  getRect(el: HTMLElement) {
    return el.getBoundingClientRect();
  }

  containerFLIP(toggleState: () => void, firstEl: HTMLElement, getLastEl = () => firstEl) {
    console.log('firstel: ', firstEl)
    const firstRect = this.getRect(firstEl);

    requestAnimationFrame(() => {

      let lastEl = getLastEl();
      const lastRect = this.getRect(lastEl);

      const bx = String(lastRect.x - firstRect.x);
      const by = String(lastRect.y - firstRect.y);
      const bw = String(lastRect.width / firstRect.width);
      const bh = String(lastRect.height / firstRect.height);

      lastEl.dataset.enlarging;;

      lastEl.style.setProperty('--bx', bx);
      lastEl.style.setProperty('--by', by);
      lastEl.style.setProperty('--bw', bw);
      lastEl.style.setProperty('--bh', bh);

      requestAnimationFrame(() => {
        delete lastEl.dataset.enlarging;
      });
    });
  }
}
