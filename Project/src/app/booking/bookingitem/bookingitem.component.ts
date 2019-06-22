import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingitem',
  templateUrl: './bookingitem.component.html',
  styleUrls: ['./bookingitem.component.css']
})
export class BookingitemComponent implements OnInit {

  @Input() hotelItem;
  constructor(private router: Router) { }

  ngOnInit() {
  }
}
//   ViewDetails()
//   { 
// this.router.navigate('Viewdetails/:id');
//   }


 

