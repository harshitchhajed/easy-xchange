import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWindowComponent } from './date-window.component';

describe('DateWindowComponent', () => {
  let component: DateWindowComponent;
  let fixture: ComponentFixture<DateWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
