import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public GOOGLE_AUTH_URL = this.user.GOOGLE_AUTH_URL;

  constructor(public user:UserService) { }

  ngOnInit() {
    
  }
}
