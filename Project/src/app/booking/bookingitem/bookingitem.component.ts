import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookingitem',
  templateUrl: './bookingitem.component.html',
  styleUrls: ['./bookingitem.component.css']
})
export class BookingitemComponent implements OnInit {
  @Input() hotelItem;
  constructor() { }

  ngOnInit() {
  }

}
