import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parkingLotPipe'
})
export class ParkingLotPipePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const parkings = [];
    for (const u of value) {
      var id = u.id_parking_lot + "";
      if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.headquarter.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        id.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        parkings.push(u);
      };
    };
    return parkings;
  }
}
