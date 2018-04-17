import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op22profileComponent } from './op22profile.component';

describe('Op22profileComponent', () => {
  let component: Op22profileComponent;
  let fixture: ComponentFixture<Op22profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op22profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op22profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
