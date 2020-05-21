import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-handbook',
  templateUrl: './handbook.component.html',
  styleUrls: ['./handbook.component.css']
})
export class HandbookComponent implements OnInit {

  public GOOGLE_AUTH_URL = this.user.GOOGLE_AUTH_URL;
  public loggedIn: boolean;
  public type: boolean;

  constructor(public user: UserService, private auth: AuthService) { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, '300');
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    this.auth.adminStatus.subscribe(value => this.type = value);
  }
}
