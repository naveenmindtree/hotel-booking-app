import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { User } from 'src/app/shades/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {  
  establishments=[];
  rating= 0;
  price= 0;
  user;
  sortform: FormGroup;
  constructor(private establishmentservice: EstablishmentService, private formBuilder: FormBuilder) { }
  ngOnInit() {
       // this.sortform=this.formBuilder.group({
    //   price:[1000],
    //     averagerating:[1]
    // })
    this.establishmentservice.establishmentsubject.subscribe(Filterdata=>{
      this.establishments=Filterdata;
      this.getSort();
    });
    this.establishmentservice.getEstablishment();
    console.log(this.establishments);
}
getRatingValue(){
  if(this.rating ===1)
  {
  this.rating=2;
  }
  else
  {
  this.rating=1;
  }
   this.price=0;
  this.getSort();
  }
  getPrice()
  {
  if(this.price === 1)
  {
  this.price=2;
  }
  else 
  {
  this.price=1;
  }                 
  this.rating=0;
  this.getSort();
  }
  getSort(){
  if(this.rating == 1)
  {
  this.establishments .sort((a, b) => a.averagerating - b.averagerating);
  }
  else if(this.rating== 2)
  {
  this.establishments.sort((a, b) => b.averagerating - a.averagerating);
  }
  if(this.price == 1)
  {
  this.establishments.sort((a, b) => a.price - b.price);
  }
  else if(this.price == 2)
  {
  this.establishments.sort((a, b) => b.price - a.price);
  }
  }
  }