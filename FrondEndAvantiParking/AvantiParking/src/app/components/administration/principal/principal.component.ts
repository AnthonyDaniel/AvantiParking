import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public GOOGLE_AUTH_URL = this.user.GOOGLE_AUTH_URL;

  constructor(public user:UserService) { }

  ngOnInit() {
    
  }
}
