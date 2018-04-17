import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op55newOfferComponent } from './op55new-offer.component';

describe('Op55newOfferComponent', () => {
  let component: Op55newOfferComponent;
  let fixture: ComponentFixture<Op55newOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op55newOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op55newOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
