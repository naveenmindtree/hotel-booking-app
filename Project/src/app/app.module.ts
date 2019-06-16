import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SigninComponent } from './Auth/signin/signin.component';
 
import { SignupComponent } from './Auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
 

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';

import { SearchComponent } from './booking/search/search.component';
import { FilterComponent } from './booking/filter/filter.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
//import 'hammer.js';
import 'hammerjs';
import { BookinglistComponent } from './booking/bookinglist/bookinglist.component';
import { BookingviewdetailsComponent } from './bookingviewdetails/bookingviewdetails.component';
import { RouterModule, Routes, } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    
    SigninComponent,
     
    SignupComponent,
     
    
     
    SearchComponent,
     
    FilterComponent,
     
    BookinglistComponent,
     
    BookingviewdetailsComponent,
     
    
    
  ],
  imports: [
   
    
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSidenavModule,
    RouterModule,
    AppRoutingModule,
    

    

  ],
  exports:[

    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

