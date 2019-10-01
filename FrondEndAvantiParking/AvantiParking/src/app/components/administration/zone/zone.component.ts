import { Component, OnInit } from '@angular/core';
import {Zone} from '../../../models/zone';
import {ServiceZoneService} from '../../../services/service-zone.service';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
  
})
export class ZoneComponent implements OnInit {
  public zone: Zone;

  constructor() { }

  ngOnInit() {
  }
  getZone(){
    
  }

}
