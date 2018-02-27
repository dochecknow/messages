import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op143shareComponent } from './op143share.component';

describe('Op143shareComponent', () => {
  let component: Op143shareComponent;
  let fixture: ComponentFixture<Op143shareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op143shareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op143shareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
