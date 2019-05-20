import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  email:string;
  em:string;
  pwd:string;
  hide:boolean=true;
  error:string;
  purpose:string="add";

  constructor(private router: Router) { }

  onSubmit(form: any) {
     console.log(form);

      this.email = form.em;
      this.pwd = form.pwd;
      this.purpose=form.purpose;
      console.log(this.purpose);

        //encoding the password
      let x=CryptoJS.MD5(this.pwd).toString();
      console.log(x);

    if (this.email == "anukritik@gmail.com" && this.pwd == "anik" && this.purpose== "add") {
      this.router.navigate(['/adminscreen/addvoter']);
    }
    else if (this.email == "anukritik@gmail.com" && this.pwd == "anik" && this.purpose== "result") {
      this.router.navigate(['/getresult']);
    }
    else {
      this.hide=false;

        setTimeout(function(){
        this.hide=true;
        
        }.bind(this),3000);
        
      this.error = 'Invalid Credentials';
    }
  }

  ngOnInit() {
  }

}
