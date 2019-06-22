import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstablishmentService } from '../services/establishment.service';
import { Establishment } from '../shades/establishment.model';

@Component({
  selector: 'app-bookingviewdetails',
  templateUrl: './bookingviewdetails.component.html',
  styleUrls: ['./bookingviewdetails.component.css']
})
export class BookingviewdetailsComponent implements OnInit 
{
  constructor(private formBuilder: FormBuilder, private eservices: EstablishmentService, private router: Router,
    private route: ActivatedRoute) { }
  bookingform: FormGroup;
  bookingView;
  count = 1
  minDate
  ngOnInit() {
    this.bookingform = this.formBuilder.group({
      date: [""],
      todate: ["", Validators.required]

    });
    this.route.params.subscribe(params => {
      this.bookingView = this.eservices.getEstablishmentById(+params.id);
      console.log(this.bookingView)
    });

    //let reviews = this.eservices.getReviews();

    this.bookingform.patchValue(this.eservices.selectLocation())
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.bookingform.get('todate').setValue(this.minDate)
    console.log(this.minDate)
    this.bookingform.valueChanges.subscribe(dates => {
      this.minDate = new Date(dates.date)
      this.minDate.setDate(this.minDate.getDate() + 1);
      // this.DateForm.get('todate').setValue(this.minDate)
      console.log(this.minDate);
      const f = new Date(dates.date);
      const t = new Date(dates.todate);
      let s = f.getDate();
      let e = t.getDate();
      this.count = e - s;
      console.log(this.count, s, e);
    })

  }

}




