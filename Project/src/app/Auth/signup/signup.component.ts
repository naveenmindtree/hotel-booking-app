import {Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  hide=true
  ngOnInit() {
      this.signupForm = this.formBuilder.group({
        phoneNumber:['',[Validators.required, Validators.required,Validators.pattern('[0-9]{10}')]],
        
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, 
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      });
  }

  // convenience getter for easy access to form fields
  get f() { 
      return this.signupForm.controls; 
    }

  onSubmit() {
    console.log(this.signupForm)
      this.submitted = true;
      // stop here if form is invalid
      if (this.signupForm.invalid) {
          return;
      }
    
  }
}

