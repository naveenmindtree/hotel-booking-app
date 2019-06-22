import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../shades/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLoggedIn = false;
  loginSubject = new Subject<boolean>();
  obj={};
  loggedInUser: User;
  users: User[] = [ 
    { id: 1, name: 'admin', email: 'nav@gmail.com', phoneNumber: '8722324601', password: 'Abc@123', isBlock: false, role: '1', establishment: [], reviews: [], bookingList: [] },
    { id: 2, name: 'shalu', email: 'shalu@123.com', phoneNumber: '8722324601', password: 'abc12@Abc', isBlock: false, role: '2', establishment: [], reviews: [], bookingList: [] },
    { id: 3, name: 'test', email: 'test@test.com', phoneNumber: '9900000000', password: '12345678', isBlock: false, role: '3', establishment: [], reviews: [], bookingList: [] },
    { id: 4, name: 'test1', email: 'test1@test.com', phoneNumber: '9900000000', password: 'abc12@Abc', isBlock: false, role: '3', establishment: [], reviews: [], bookingList: [] }
  ];
  constructor(private router: Router) { }
  logIn(signinForm) {
    if (signinForm) {
      const sign = this.users.find(x => x.email === signinForm.email && x.password === signinForm.password);
      if (sign) {
        this.obj=sign;
        this.getprofile();
        this.isLoggedIn = true;
        this.loginSubject.next(this.isLoggedIn);
        return true;
      }
      else {
        this.isLoggedIn = false;
        this.loginSubject.next(this.isLoggedIn);
        return false;
      }
    }
   }
  logout() {
    this.isLoggedIn = false;
    this.loginSubject.next(this.isLoggedIn);
    this.router.navigate(['/signin']);
  }
  signInData(user)
  {
    this.users.push(user);
  }
  getprofile(){
    console.log(this.obj)
  return this.obj
  }
  profileData(edit){
    for (var i in this.users) {
      if (this.users[i].id === edit.id) {
        this.users[i]=edit;
     }
    }
    this.obj=edit;
    console.log(this.obj)
   this.getprofile();
}}



