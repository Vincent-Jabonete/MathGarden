import { Component, OnInit } from '@angular/core';
import { ModalLogoutComponent } from '../modal-logout/modal-logout.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor( public dialog: MatDialog, private user: UserService) { }

  ngOnInit() {

    this.user.getSomeData().subscribe(data => {
      // this.message =data.message
    })
  }

  
  openDialog(){

    this.dialog.open(ModalLogoutComponent);
  }

  images = ['../../assets/img/1.png', '../../assets/img/7.png','../../assets/img/9.png'];

  
}
