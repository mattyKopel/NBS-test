import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDistanceComponent } from './display-distance.component';

describe('DisplayDistanceComponent', () => {
  let component: DisplayDistanceComponent;
  let fixture: ComponentFixture<DisplayDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
