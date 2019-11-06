import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public filterUser = "";
  public users: any = [];

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getAll().subscribe(data => { this.users = data });
  }

  admin(u) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will grant administrator privileges to this user !!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4023',
      confirmButtonText: 'Yes, grant privileges!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        u.role = !u.role;
        this.user.modify(u).subscribe(
          data => {
            Swal.fire(
              'Success!',
              'Privileges were granted',
              'success'
            )
          },
          error => {
            Swal.fire(
              'Error!',
              'No privileges were granted - Contact application administrator',
              'error'
            )
          }
        );
      }
    })
  }
  regular(u) {
    this.user.loadImg().subscribe(
      data => {
        this.filter(u, data)
      },
      error => {
        Swal.fire(
          'Error!',
          'Error: Contact application administrator',
          'error'
        )
      }
    );
  }
  filter(u, data) {
    if (data.email == u.email) {
      Swal.fire(
        'Error!',
        'To make sure there is always an administrator, you cannot delete yourself, ask a fellow administrator to eliminate your privileges',
        'error'
      )
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You will remove administrator privileges from this user !!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#EF4023',
        confirmButtonText: 'Yes, remove privileges!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          u.role = !u.role;
          this.user.modify(u).subscribe(
            data => {
              Swal.fire(
                'Success!',
                'Privileges removed',
                'success'
              )
            },
            error => {
              Swal.fire(
                'Error!',
                'Could not remove privileges, contact application administrator',
                'error'
              )
            }
          );
        }
      })
    }
  }
}
