import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op50shopComponent } from './op50shop.component';

describe('Op50shopComponent', () => {
  let component: Op50shopComponent;
  let fixture: ComponentFixture<Op50shopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op50shopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op50shopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
