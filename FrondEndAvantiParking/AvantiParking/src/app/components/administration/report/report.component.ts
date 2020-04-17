import { Component, OnInit } from '@angular/core';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import { ServiceSpaceService } from 'src/app/services/service-space.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  private countHeadquarter = 0;
  private countParking = 0;
  private countZone = 0;
  private countSpaces = 0;

  constructor(public headquarter: ServiceHeadquarterService,public parking: ServiceParkingLotService,public zone: ServiceZoneService,public space: ServiceSpaceService) { }

  ngOnInit() {
   this.loadDashboard();
  }

  loadDashboard(){
    this.headquarter.listHeadquarter().subscribe(
      data=>{
        this.loadCountHeadquarter(data);
      }
    );
    this.parking.listParkingLot().subscribe(
      data=>{
        this.loadCountParking(data);
      }
    );
    this.zone.listZone().subscribe(
      data=>{
        this.loadCountZones(data);
      }
    );
    this.space.listSpace().subscribe(
      data=>{
        this.loadCountSpaces(data);
      }
    );
  }
  loadCountHeadquarter(data){
    data.forEach(element => {
      setTimeout(() => {
        this.countHeadquarter++;
      }, 700);
    });
  }
  loadCountParking(data){
    data.forEach(element => {
      setTimeout(() => {
        this.countParking++;
      }, 700);
    });
  }
  loadCountZones(data){
    data.forEach(element => {
      setTimeout(() => {
        this.countZone++;
      }, 700);
    });
  }
  loadCountSpaces(data){
    data.forEach(element => {
      setTimeout(() => {
        this.countSpaces++;
      }, 700);
    });
  }
}
