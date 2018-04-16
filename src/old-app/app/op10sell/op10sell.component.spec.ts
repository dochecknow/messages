import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op10sellComponent } from './op10sell.component';

describe('Op10sellComponent', () => {
  let component: Op10sellComponent;
  let fixture: ComponentFixture<Op10sellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op10sellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op10sellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
