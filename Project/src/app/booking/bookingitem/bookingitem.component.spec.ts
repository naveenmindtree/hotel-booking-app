import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingitemComponent } from './bookingitem.component';

describe('BookingitemComponent', () => {
  let component: BookingitemComponent;
  let fixture: ComponentFixture<BookingitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
