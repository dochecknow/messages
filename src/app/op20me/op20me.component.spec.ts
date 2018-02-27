import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op20meComponent } from './op20me.component';

describe('Op20meComponent', () => {
  let component: Op20meComponent;
  let fixture: ComponentFixture<Op20meComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op20meComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op20meComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
