import * as core from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstablishmentService } from 'src/app/services/establishment.service';


@core.Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements core.OnInit {
guest=1;
  searchform:FormGroup;
  submitted=false;


 
  constructor(private formBuilder:FormBuilder,private establishmentservice:EstablishmentService) { }
  getAdd()
  {
   this.guest++;
  }

  ngOnInit() {
    this.searchform = this.formBuilder.group({
        location: ['', [Validators.required  ]],
       // date:['',[Validators.required]],
        guest:['',[Validators.required]]

         });


this.searchform.valueChanges.subscribe(searchdata=>{
  this.establishmentservice=searchdata;
  this.establishmentservice.getLocation(searchdata);
})
 

}
get valid()
{
  return this.searchform.controls;
}
onSubmit()
{
this.submitted=true;

if (this.searchform.invalid)
{
  return true;
}
}
}
  



