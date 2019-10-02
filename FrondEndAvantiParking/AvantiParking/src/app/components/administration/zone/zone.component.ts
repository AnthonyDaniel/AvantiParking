import { Component, OnInit } from '@angular/core';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import { Zone } from 'src/app/models/zone';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
  
})
export class ZoneComponent implements OnInit {

  public zone: Zone;
  public zoneService;
  constructor(public _zone:ServiceZoneService) { }

  ngOnInit() {
    this.getZone();
  }
  getZone(){
    this._zone.listZone().subscribe(
      data=>{
        this.zoneService = data;
        console.log(data)
      },
      error => console.log(error)
    )
  }

}
