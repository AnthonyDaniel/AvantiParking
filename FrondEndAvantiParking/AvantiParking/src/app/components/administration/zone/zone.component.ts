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
  public zones;
  constructor(public _zone:ServiceZoneService) { }

  private tempZone:any;

  ngOnInit() {
    this.ListZone();
  }
  ListZone(){
    this._zone.listZone().subscribe(
      data=>{
        this.zones = data;
      },
      error => console.log(error)
    )
  }

}
