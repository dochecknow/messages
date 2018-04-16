import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op140ticketsComponent } from './op140tickets.component';

describe('Op140ticketsComponent', () => {
  let component: Op140ticketsComponent;
  let fixture: ComponentFixture<Op140ticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op140ticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op140ticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
