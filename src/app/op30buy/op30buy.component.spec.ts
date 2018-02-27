import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op30buyComponent } from './op30buy.component';

describe('Op30buyComponent', () => {
  let component: Op30buyComponent;
  let fixture: ComponentFixture<Op30buyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op30buyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op30buyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
