import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { BookinglistComponent } from './booking/bookinglist/bookinglist.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Signin', component: SigninComponent },
  { path: ' Signup',component:SignupComponent },
  { path:'Bookinglist',component: BookinglistComponent },
  { path: '',   redirectTo: 'Bookinglist', pathMatch: 'full' },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
    )],
    exports: [
      RouterModule
    ]
  
  
})
export class AppRoutingModule { }
