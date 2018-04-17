import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op57newShopitemComponent } from './op57new-shopitem.component';

describe('Op57newShopitemComponent', () => {
  let component: Op57newShopitemComponent;
  let fixture: ComponentFixture<Op57newShopitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op57newShopitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op57newShopitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
