import { Component, OnInit } from '@angular/core';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';

@Component({
  selector: 'app-headquarter',
  templateUrl: './headquarter.component.html',
  styleUrls: ['./headquarter.component.css']
})
export class HeadquarterComponent implements OnInit {

  constructor(public headquarter:ServiceHeadquarterService) { 
    this.headquarter.listHeadquarter().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  filterHeadquarter;
  public headquarters;
  
  ngOnInit() {

  }

}
