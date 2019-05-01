import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login.service';
import * as alertify from 'alertify.js';
import { NgxSpinnerService } from 'ngx-spinner';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css']
})
export class AddVoterComponent implements OnInit {

  name:string;
  roll:number;
  em:string;
  pwd:string;
  successMessage:string;
  hide:boolean=true;

  constructor(private loginservice:LoginService, private spinner: NgxSpinnerService) { }

  onAddVoter(form: any) {
    console.log(form);

     this.em = form.em;
     this.name= form.name;
     this.roll= form.roll;
     this.pwd= form.pwd;

     let x=CryptoJS.MD5(this.pwd).toString();
     console.log(x);
     console.log(this.pwd);

      const temp={name:this.name,
        roll_no: this.roll,
        email:this.em,
        password: x

      };

          this.spinner.show();
      this.loginservice.addVoter(temp)
      .subscribe(
            data=>
         {
            this.spinner.hide();
            if(data==null)
            {
            this.showMessage('Email Already Registered');
            }
            else{
              console.log(data);
            
            alertify.alert('Successfully registered !');
            this.onSuccessDataEmpty();
            }

          },
            error=> 
            {
            this.spinner.hide();
            this.showMessage('some error in reaching Database !');
            }
            );

      }
    
      showMessage(successval:any){

        this.successMessage = successval;
        
        this.hide=false;

        setTimeout(function(){
        this.hide=true;
        
        }.bind(this),3000);
        
        console.log("msg : "+this.successMessage);
        }
        
        onSuccessDataEmpty() {
        this.name='';
        this.em='';
        this.roll=undefined;
        this.pwd= '';
        }

  ngOnInit() {
  }

}
