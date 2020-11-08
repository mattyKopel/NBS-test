import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInListComponent } from './item-in-list.component';

describe('ItemInListComponent', () => {
  let component: ItemInListComponent;
  let fixture: ComponentFixture<ItemInListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
