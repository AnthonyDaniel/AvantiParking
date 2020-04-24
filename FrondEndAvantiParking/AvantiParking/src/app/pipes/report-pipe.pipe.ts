import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ReportPipe'
})
export class ReportPipePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const report = [];
    for (const u of value) {
      console.log(u);
      if (u.end_date_extend == null) {
        u.end_date_extend = "";
      }
      var user = u.reserve.user.id + "";
      if (u.date.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.end_date_extend.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        u.end_time.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.start_time.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        user.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.space.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        u.space.zone.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.space.zone.parking_lot.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        u.space.zone.parking_lot.headquarter.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        report.push(u);
      };
      if (u.reserve.vehicle != null) {
        if (u.reserve.vehicle.license_plate.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          report.push(u);
        };
      }
    };
    return report;
  }
}
