import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shades/user.model';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Auth/authservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  submitted = false;
  obj: User;
  hide = true;
  constructor(private formBuilder: FormBuilder, private router: Router,private auth : AuthserviceService) { }

  ngOnInit() {
      this.profileForm = this.formBuilder.group({
        username: ['', Validators.required],
        phoneNumber: ['', [Validators.required, Validators.required, Validators.pattern('[0-9]{10}')]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
        role: ['', Validators.required],
        id: []
      });
      this.profileForm.patchValue(this.auth.getprofile());
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

    onSubmit() {
    console.log(this.profileForm);
      this.submitted = true;
      this.obj = this.profileForm.value;
      // stop here if form is invalid
      if (this.profileForm.invalid) {
          return;
      }
     this.auth.profileData(this.profileForm.value)
      
      this.router.navigate(['/search']);
  }

}



