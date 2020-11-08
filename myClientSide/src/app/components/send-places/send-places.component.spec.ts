import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPlacesComponent } from './send-places.component';

describe('SendPlacesComponent', () => {
  let component: SendPlacesComponent;
  let fixture: ComponentFixture<SendPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
