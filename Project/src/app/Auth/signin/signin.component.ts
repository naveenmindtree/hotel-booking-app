import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../../shades/user.model';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage;
  submitted = false;
constructor (private formBuilder: FormBuilder, private router: Router, private auth: AuthserviceService) { }
  hide = true;
  ngOnInit() {
      this.signinForm = this.formBuilder.group({
          email : ['', [Validators.required, Validators.email]], password : ['', [Validators.required, ]],
  });
  }
// convenience getter for easy access to form fields
  get f(){ 
  return this.signinForm.controls; 
}
 onSubmit(){
    console.log(this.signinForm);
      this.submitted = true;
      if (this.signinForm.invalid) {
          return;
      }
      const login =this.auth.logIn(this.signinForm.value);
      if (login)
      this.router.navigate (['/search']);
    else
    this.errorMessage = 'invalid values';
  }}

