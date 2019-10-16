import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zonePipe'
})
export class ZonePipePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const zone = [];
    for (const u of value) {
      if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.parking_lot.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        zone.push(u);
      };
    };
    return zone;
  }
}