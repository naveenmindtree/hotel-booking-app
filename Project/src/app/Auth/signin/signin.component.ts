import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {User} from '../../shades/user.model'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  hide=true
  ngOnInit() {
      this.signinForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, 
          ]],
      });
  }

  // convenience getter for easy access to form fields
  getf() { 
      return this.signinForm.controls; 
    }

  onSubmit() {
    console.log(this.signinForm)
      this.submitted = true;
      if (this.signinForm.invalid) {
          return;
      }
    
  }

}

