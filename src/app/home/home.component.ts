import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor( public dialog: MatDialog, public userService: UserService, private router: Router) { }

  ngOnInit() {


  }


  openDialog(){

      this.dialog.open(LogoutModalComponent);
  }


  images = ['../../assets/img/1.png', '../../assets/img/7.png','../../assets/img/9.png'];

  
}
