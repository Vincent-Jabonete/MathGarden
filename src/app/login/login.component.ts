import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as express from 'express';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private Auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  //form login
  loginUser(event) {
    event.preventDefault(); // to view the form
    const target = event.target; // target to get element of username, password
    const username = target.querySelector('#username').value; // to get data in username
    const password = target.querySelector('#password').value; // to get data password


 // to get user details
    this.Auth.getUserDetails(username,password).subscribe(data => {
      if(data.success) {
      //redirect the person to /home
      this.router.navigate(['home']);
      this.Auth.setLoggedIn(true);

      }else  {
        window.alert(data.message)
      }
    
    })
    console.log(username, password); // console the data from username and password 
  }

}
