import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataReserveServiceService {
  //almacenan los datos para enviar a otro componente
  headquarter: any = 'no ha seleccionado nada';
  parkingLot: string = 'no ha seleccionado nada';
  zone: string = 'no ha seleccionado nada';

  constructor() { }
}
