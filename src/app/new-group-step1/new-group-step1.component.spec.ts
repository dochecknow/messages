import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupStep1Component } from './new-group-step1.component';

describe('NewGroupStep1Component', () => {
  let component: NewGroupStep1Component;
  let fixture: ComponentFixture<NewGroupStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
