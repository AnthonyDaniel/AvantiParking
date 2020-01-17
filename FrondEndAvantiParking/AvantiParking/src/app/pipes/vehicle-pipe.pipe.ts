import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehiclePipe'
})
export class VehiclePipePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const vehicles = [];
    for (const v of value) {
      var id = v.licence_plate + "";
      if (v.brand.toLowerCase().indexOf(arg.toLowerCase()) > -1 || v.model.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        id.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        vehicles.push(v);
      };
    };
    return vehicles;
  }
}

