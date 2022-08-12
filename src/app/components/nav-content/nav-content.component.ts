import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Inject, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { NavContainerComponent } from '../nav-container/nav-container.component';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['../nav-container/nav-container.component.scss'],
  host: {
    'class': 'app-nav-content',
    '[style.margin-left.px]': '_container._contentMargins.left',
    '[style.margin-right.px]': '_container._contentMargins.right',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CdkScrollable,
      useExisting: NavContentComponent,
    }]

})
export class NavContentComponent extends CdkScrollable implements AfterContentInit {

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(forwardRef(() => NavContainerComponent)) public _container: NavContainerComponent,
    elementRef: ElementRef<HTMLElement>,
    scrollDispatcher: ScrollDispatcher,
    ngZone: NgZone,
  ) {

    super(elementRef, scrollDispatcher, ngZone)
  }
  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

}
