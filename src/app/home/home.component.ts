import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import * as jQuery from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  images = ['../../assets/img/1.png', '../../assets/img/7.png','../../assets/img/9.png'];

}
