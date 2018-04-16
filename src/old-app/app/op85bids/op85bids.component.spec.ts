import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op85bidsComponent } from './op85bids.component';

describe('Op85bidsComponent', () => {
  let component: Op85bidsComponent;
  let fixture: ComponentFixture<Op85bidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op85bidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op85bidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
