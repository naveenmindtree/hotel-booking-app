import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelsearch',
  templateUrl: './hotelsearch.component.html',
  styleUrls: ['./hotelsearch.component.css']
})
export class HotelsearchComponent implements OnInit {
guest=1;
  searchform:FormGroup;
  submitted=false;
   constructor(private formBuilder:FormBuilder,private establishmentservice:EstablishmentService,private router:Router) { }
  getAdd()
  {
   this.guest++;
  }

  ngOnInit() {
    
    this.searchform = this.formBuilder.group({
        location: ['', [Validators.required]],
        date:['',[Validators.required]],
        guest:[1,[Validators.required]]

         });
         console.log("patching")
         console.log(this.establishmentservice.selectLocation());
         this.searchform.patchValue(this.establishmentservice.selectLocation());
         
 }
 
 getLocationError()
{
  // console.log(this.searchform.get('location').hasError('required'));
  return this.searchform.get('location').hasError('required') ? 'Please enter location':'';
}

onSubmit()
{
  console.log(this.searchform.value);
  this.establishmentservice.searchHotels(this.searchform.value);
  
  this.router.navigate(['/Bookinglist'])
}



}


  