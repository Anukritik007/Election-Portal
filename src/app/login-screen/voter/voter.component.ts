import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import CryptoJS from 'crypto-js';
import { NgxSpinnerService } from 'ngx-spinner';
import {LoginService} from '../../login.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  email:string;
  pwd:string;
  check:boolean=true;
  error:string;

  constructor(private router: Router ,private loginservice:LoginService, private spinner: NgxSpinnerService) { }

  onSubmit(form: any) {
    // console.log(form);

      this.email = form.em;
      this.pwd = form.pwd;
    
        //encoding the password
      let x=CryptoJS.MD5(this.pwd).toString();
      console.log(x);

    let request={
      email:this.email,
      password:x
    };

    this.spinner.show();
    this.loginservice.loginVoter(request)
    .subscribe(
      data=> {
        this.spinner.hide();
        console.log("data: "+data);
        if(data==null)  //no data returned in case of invalid credentials from RESTapi
        {
          this.check=false;
          this.error = 'Invalid Credentials';
        }
        else{
        localStorage.setItem('voterName',data[0]);
        localStorage.setItem('voterRoll',data[1].toString());
        console.log('Success login');
        // localStorage.setItem('UserId',data[1].toString());
        this.router.navigate(['/voterscreen']);
        }    
      },
      error =>{
        this.spinner.hide();
        console.log('Unable to hit RESTapi');
      }
    );
  }
  ngOnInit() {
  }

}
