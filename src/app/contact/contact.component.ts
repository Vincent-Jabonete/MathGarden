import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLogoutComponent } from '../modal-logout/modal-logout.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public dialog:MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog(){

    this.dialog.open(ModalLogoutComponent);
  }

}
