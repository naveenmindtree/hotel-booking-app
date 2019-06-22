import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { BookinglistComponent } from './booking/bookinglist/bookinglist.component';
import { Routes, RouterModule } from '@angular/router';
import { HotelsearchComponent } from './booking/hotelsearch/hotelsearch.component';
import { BookingviewdetailsComponent } from './bookingviewdetails/bookingviewdetails.component';
import { ProfileComponent } from './booking/profile/profile.component';
import { MybookingComponent } from './booking/mybooking/mybooking.component';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'Bookinglist', component: BookinglistComponent },
  {path: 'search', component: HotelsearchComponent},
  {path: 'Viewdetails/:id', component: BookingviewdetailsComponent},
  {path:'profile',component: ProfileComponent},
  {path:'mybooking',component: MybookingComponent},
   { path: '',   redirectTo: 'signin', pathMatch: 'full'},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
    )],
    exports: [
      RouterModule
    ]})
export class AppRoutingModule { }
