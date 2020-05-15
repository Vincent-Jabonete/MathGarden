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
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

read(){
  
  var more = document.getElementById("more");
  var read = document.getElementById("read");
  if(more.style.display == 'block') {
    more.style.display = 'none';
    read.innerHTML = "Read more";
    
  } else {
    more.style.display = 'block';
    read.innerHTML = "Read less";
  }

}
  

}
