import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/shades/booking.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit 
{
  

  constructor(private bookservice:BookingService ) { }
  // private router: Router, private route: ActivatedRoute
  history:Booking[];
  checkIn=[]
  checkOut=[]
  ngOnInit() {
    this.bookservice.gethistory().subscribe(data=>{
      this.history=data;
    })
    for(let s of this.history) {
      const date=new Date();
      if(s.Checkindate<date && s.checkoutdate<date){
        this.checkIn.push(s)
      }
      else{
        this.checkOut.push(s)
      }

    }
  }  }
  






