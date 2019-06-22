import { Injectable } from '@angular/core';
import { Booking } from '../shades/booking.model';
import { User } from '../shades/user.model';
import { Establishment } from '../shades/establishment.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookinghistory:Booking[]=[{ Booked_by:new User('naveen'),establishment:new Establishment('leelaplace',4,5000),Checkindate:new Date('6/06/2019'),checkoutdate:new Date('06/08/2019'),noofperson:(2),cost:(2000)},
  {  Booked_by:new User('dhoni'),establishment:new Establishment('hyderabad',4,5000),Checkindate:new Date('07/07/2019'),checkoutdate:new Date('07/10/2019'),noofperson:(2),cost:3000},
  {   Booked_by:new User('raina'),establishment:new Establishment('mysore',2,2500),Checkindate:new Date('06/25/2019'),checkoutdate:new Date('06/28/2019'),noofperson:(4),cost:(4000)}, 
{ Booked_by:new User('bravo'),establishment:new Establishment('chennai',5,7500),Checkindate:new Date('05/18/2019'),checkoutdate:new Date('05/22/2019'),noofperson:(2),cost:(5000)},
  ]

  constructor() { }
  
  gethistory()
  {
return of(this.bookinghistory);
  }
}
