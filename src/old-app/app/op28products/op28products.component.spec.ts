import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op28productsComponent } from './op28products.component';

describe('Op28productsComponent', () => {
  let component: Op28productsComponent;
  let fixture: ComponentFixture<Op28productsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op28productsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op28productsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
