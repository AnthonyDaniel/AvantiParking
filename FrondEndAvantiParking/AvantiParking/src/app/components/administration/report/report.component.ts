import { Component, OnInit } from '@angular/core';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import { ServiceSpaceService } from 'src/app/services/service-space.service';
import { UserService } from 'src/app/services/user.service';
import { MyReservesServiceService } from 'src/app/services/my-reserves-service.service';
import { ReportsService } from 'src/app/services/reports.service';

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
  private countUsers = 0;
  private countReservations = 0;

  private minDate = undefined;
  private maxDate = undefined;

  private initDate = null;
  private finalDate = null;

  constructor(public headquarter: ServiceHeadquarterService,
    public parking: ServiceParkingLotService,
    public zone: ServiceZoneService,
    public space: ServiceSpaceService,
    public user: UserService,
    public reseve: MyReservesServiceService,
    public report: ReportsService) { }

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
    this.user.getAll().subscribe(
      data=>{
        this.loadCountUsers(data);
      }
    );
    this.report.listReservation().subscribe(
      data=>{
        this.loadCountReservations(data);
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
  loadCountUsers(data){
    data.forEach(element => {
      setTimeout(() => {
        this.countUsers++;
      }, 700);
    });
  }
    loadCountReservations(data){
    data.forEach(element => {
      setTimeout(() => {
        this.countReservations++;
      }, 700);
    });
  }
  generateReport(){
    console.log(this.initDate);
    console.log(this.finalDate);
  }
}
