import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupStep2Component } from './new-group-step2.component';

describe('NewGroupStep2Component', () => {
  let component: NewGroupStep2Component;
  let fixture: ComponentFixture<NewGroupStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
