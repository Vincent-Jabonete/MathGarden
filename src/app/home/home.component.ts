import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  images = ['../../assets/img/1.png', '../../assets/img/7.png','../../assets/img/9.png'];

  

}
