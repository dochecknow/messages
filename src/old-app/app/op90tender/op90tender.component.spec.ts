import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op90tenderComponent } from './op90tender.component';

describe('Op90tenderComponent', () => {
  let component: Op90tenderComponent;
  let fixture: ComponentFixture<Op90tenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op90tenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op90tenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
