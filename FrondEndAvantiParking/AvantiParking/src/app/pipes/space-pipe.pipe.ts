import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Space {

  constructor() { }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spacePipe'
})
export class SpacePipePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const space = [];
    for (const u of value) {
      if (u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || u.type.toLowerCase().indexOf(arg.toLowerCase()) > -1
     ) {
        space.push(u);
      };
    };
    return space;
  }
}