import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDrawerComponent } from './data-drawer.component';

describe('DataDrawerComponent', () => {
  let component: DataDrawerComponent;
  let fixture: ComponentFixture<DataDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
