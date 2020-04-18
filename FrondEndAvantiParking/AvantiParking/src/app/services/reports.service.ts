import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API from './api.modules';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
@Injectable({
   providedIn: 'root'
})
export class ReportsService {
   public url: any;

   httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
   });

   constructor(private http: HttpClient) { 
      this.url = API.domain;
   }

   fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
   fileExtension = '.xlsx';
 
   exportExcel(jsonData: any[], fileName: string): void {
     const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
     const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
     const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
     this.saveExcelFile(excelBuffer, fileName);
   }
 
   saveExcelFile(buffer: any, fileName: string): void {
     const data: Blob = new Blob([buffer], {type: this.fileType});
     FileSaver.saveAs(data, fileName + this.fileExtension);
   }
  
    listReservation() {
      return this.http.get(`${this.url}/api/reservations`,{headers:this.httpHeaders});
   }
 
}
