import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Auth/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedIn=false;

  constructor(private auth:AuthserviceService) { }

  ngOnInit() {
    this.auth.loginSubject.subscribe(data=>{
      this.isLoggedIn=data;
      console.log(this.isLoggedIn)
    })
  }

}
