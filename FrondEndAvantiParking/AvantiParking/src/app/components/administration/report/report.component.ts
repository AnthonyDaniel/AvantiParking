import { Component, OnInit } from '@angular/core';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import { ServiceSpaceService } from 'src/app/services/service-space.service';
import { UserService } from 'src/app/services/user.service';
import { MyReservesServiceService } from 'src/app/services/my-reserves-service.service';
import { ReportsService } from 'src/app/services/reports.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { element } from 'protractor';
import { NotificationsService } from 'src/app/services/notifications.service';

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

  private activeUser = [];
  private reportComplete = [];

  private d1: string;
  private d2: string;

  private minDate = undefined;
  private maxDate = undefined;

  private initDate = null;
  private finalDate = null;
  private userInf = null; 

  private filter = "";

  private loadding = false;

  constructor(public headquarter: ServiceHeadquarterService,
    public parking: ServiceParkingLotService,
    public zone: ServiceZoneService,
    public space: ServiceSpaceService,
    public user: UserService,
    public reseve: MyReservesServiceService,
    public report: ReportsService,
    public emails: NotificationsService) { }

  ngOnInit() {
    this.loadDashboard();

    this.user.loadImg().subscribe(
      data=>{
        this.loadUser(data);
      }
    );
  }

  loadUser(data) {
    this.userInf = data;
  }

  loadDashboard() {
    this.headquarter.listHeadquarter().subscribe(
      data => {
        this.loadCountHeadquarter(data);
      }
    );
    this.parking.listParkingLot().subscribe(
      data => {
        this.loadCountParking(data);
      }
    );
    this.zone.listZone().subscribe(
      data => {
        this.loadCountZones(data);
      }
    );
    this.space.listSpace().subscribe(
      data => {
        this.loadCountSpaces(data);
      }
    );
    this.user.getAll().subscribe(
      data => {
        this.loadCountUsers(data);
      }
    );
    this.report.listReservation().subscribe(
      data => {
        this.loadCountReservations(data);
      }
    );
  }
  loadCountHeadquarter(data) {
    data.forEach(element => {
      setTimeout(() => {
        this.countHeadquarter++;
      }, 700);
    });
  }
  loadCountParking(data) {
    data.forEach(element => {
      setTimeout(() => {
        this.countParking++;
      }, 700);
    });
  }
  loadCountZones(data) {
    data.forEach(element => {
      setTimeout(() => {
        this.countZone++;
      }, 700);
    });
  }
  loadCountSpaces(data) {
    data.forEach(element => {
      setTimeout(() => {
        this.countSpaces++;
      }, 700);
    });
  }
  loadCountUsers(data) {
    data.forEach(element => {
      setTimeout(() => {
        this.countUsers++;
      }, 700);
    });
  }
  loadCountReservations(data) {
    data.forEach(element => {
      setTimeout(() => {
        this.countReservations++;
      }, 700);
    });
  }
  generateReport() {
    this.loadding=true;
    if (this.initDate != null && this.finalDate != null) {
      let d1 = this.initDate.year + "-" + this.initDate.month + "-" + this.initDate.day;
      let d2 = this.finalDate.year + "-" + this.finalDate.month + "-" + this.finalDate.day;
      this.d1 = d1;
      this.d2 = d2;
      this.report.generateReport(d1, d2).subscribe(
        data => {
          this.loadReport(data);
        },
        error => {
          this.loadding=false;
          Swal.fire({
            type: 'error',
            title: 'An error occurred while generating the report, please try again later, if the problem persists, contact the page administrator',
            showConfirmButton: true,
            timer: 15000
          })
        }
      );
    } else {
      this.loadding=false;
      Swal.fire({
        type: 'error',
        title: 'The init date or final date value is invalid',
        showConfirmButton: true,
        timer: 15000
      })
    }
  }
  loadReport(data) {
    this.loadding=false;
    this.activeUser=[];
    let myObj = [];
    if (data != null) {
      this.reportComplete = data;
      this.reportComplete.forEach(element => {
        if (!(element.reserve.user.email in myObj)) {
          myObj[element.reserve.user.email] = true
          this.activeUser.push(element.reserve.user)
        }
      });

      if (this.reportComplete.length == 0) {
        Swal.fire({
          type: 'error',
          title: 'No data to report',
          showConfirmButton: true,
          timer: 15000
        })
      }
    }
  }
  sendEmail() {
    this.loadding=true;
    let report = document.getElementById("report");
    let email={
      id:null,
      to:this.userInf.email,
      subject:"REPORT " + this.d1 + " " + this.d2,
      text:"The report has been sent to your email",
      html:report.innerHTML,
      viewed:false,
      user_id:{
        id:this.userInf.id
      }
    }
    this.emails.sendEmail(email).subscribe(
      data => {
        this.loadding=false;
        Swal.fire({
          type: 'success',
          title: 'The report has been sent to your email',
          showConfirmButton: true,
          timer: 15000
        })
      },
      error => {
        this.loadding=false;
        console.log(error);
      }
    );
  }
}
