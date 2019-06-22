import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private authservice:AuthserviceService,private router:Router) { }
  hide = true;
  loggedInUser;
  ngOnInit() {
      this.signupForm = this.formBuilder.group({
        username:['',[Validators.required]],
        phoneNumber: ['' ,[Validators.required, Validators.pattern('[0-9]{10}')]],
         email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
            role:['',[Validators.required]]
      });
    }
// convenience getter for easy access to form fields
  get f() 
  {
     return this.signupForm.controls; 
  }
    // getErrorMessage() {
    //   return this.signupForm.get('fname').hasError('required')  ?'number not allowed' 
       
    // }
onSubmit() {
    console.log(this.signupForm);
      this.submitted = true;
      // stop here if form is invalid
      if (this.signupForm.invalid) 
      {
        console.log(this.signupForm)
          return;
      }
      this.authservice.signInData(this.signupForm.value)
      this.router.navigate(['/signin']);
}
}
  