import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {

  constructor(private router: Router) { }



  onLogoutLeave(){
    localStorage.clear();
    this.router.navigate(['']);

    alertify.alert('Successfully Logged out !');
  }
  ngOnInit() {
  }

}
