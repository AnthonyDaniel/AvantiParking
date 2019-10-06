import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headquarterPipe'
})
export class HeadquarterPipePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const headquarters = [];
    for (const u of value) {
      var id = u.id_hearquarter + "";
      if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.country.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        id.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.city.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        headquarters.push(u);
      };
    };
    return headquarters;
  }
}
