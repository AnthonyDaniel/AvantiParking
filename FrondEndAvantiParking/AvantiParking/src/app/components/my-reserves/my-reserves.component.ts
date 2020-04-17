import { Component, OnInit } from '@angular/core';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-reserves',
  templateUrl: './my-reserves.component.html',
  styleUrls: ['./my-reserves.component.css']
})
export class MyReservesComponent implements OnInit {
  
  public parkings

  constructor( public _parking: ServiceParkingLotService) { }

  ngOnInit() {
    this.ListParkings();
  }
  ListParkings() {
    this._parking.listParkingLot().subscribe(
      data => {
        this.parkings = data;
      },
      error => console.log(error)
    )
  }
  

deleteParkingLot(_formParkingLot) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: 'btn btn-secondary'
    },
    buttonsStyling: false
  })

  Swal.fire({
    title: 'Are you sure?',
    text: "You will not be able to reverse this! If you eliminate this parking, areas and parking areas will be permanently deleted!!!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#EF4023',
    confirmButtonText: 'Yes, delete it!',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      this._parking.deleteParkingLot(_formParkingLot).subscribe(
        data => {
          this.ngOnInit();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      )
    }
  })
}
}