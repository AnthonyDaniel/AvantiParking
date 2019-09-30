import { Component, OnInit } from '@angular/core';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';

@Component({
  selector: 'app-headquarter',
  templateUrl: './headquarter.component.html',
  styleUrls: ['./headquarter.component.css']
})
export class HeadquarterComponent implements OnInit {

  constructor(private headquarter:ServiceHeadquarterService) { }

  filterHeadquarter;
  public headquarters;
  
  ngOnInit() {
    this.headquarter.listHeadquarter().subscribe(
      data => {
        this.headquarters = data;
      },
      error => console.log(error)
    );
  }

}
