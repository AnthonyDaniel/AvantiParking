import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPipe'
})
export class UserPipePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const user = [];
    for (const u of value) {
      if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.email.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        user.push(u);
      };
    };
    return user;
  }
}
