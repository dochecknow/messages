import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op85bidComponent } from './op85bid.component';

describe('Op85bidComponent', () => {
  let component: Op85bidComponent;
  let fixture: ComponentFixture<Op85bidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op85bidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op85bidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
