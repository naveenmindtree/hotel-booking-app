import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
filterform:FormGroup;
  
step=1;  
value1=1000;
minvalue=1000;
maxvalue=10000;
 
  getslider(){
     if(this.value1<10000)
     this.minvalue=this.value1+100
   else
     this.minvalue=this.minvalue-100
   }
  constructor(private eservice:EstablishmentService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.filterform=this.formBuilder.group({
  
    Price:['', [Validators.required, Validators ]],
    Rating:['',[Validators.required,Validators]],

  Hotel:[true],
  RoomStay:[true],
  Search:['']
  })
      this.filterform.valueChanges.subscribe(data=>{
        this.eservice.getFilter(data)
      })
  }
  setRating(star:number)
  {
 this.filterform.get("Rating").setValue(star)
  }
}

