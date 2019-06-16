import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingviewdetailsComponent } from './bookingviewdetails.component';

describe('BookingviewdetailsComponent', () => {
  let component: BookingviewdetailsComponent;
  let fixture: ComponentFixture<BookingviewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingviewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingviewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
