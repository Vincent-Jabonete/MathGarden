import { Component, OnInit } from '@angular/core';

import { ModalLogoutComponent } from '../modal-logout/modal-logout.component';
import { MatDialog } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }

  
  openDialog(){

    this.dialog.open(ModalLogoutComponent);
  }

  images = ['../../assets/img/1.png', '../../assets/img/7.png','../../assets/img/9.png'];

  
}
