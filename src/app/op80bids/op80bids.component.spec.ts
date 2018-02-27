import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op80bidsComponent } from './op80bids.component';

describe('Op80bidsComponent', () => {
  let component: Op80bidsComponent;
  let fixture: ComponentFixture<Op80bidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op80bidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op80bidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
