import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login.service';
import * as alertify from 'alertify.js';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  successMessage:string;
  name:string;
  roll:number;
  em:string;
  hide:boolean=true;

  constructor(private loginservice:LoginService, private spinner: NgxSpinnerService) { }

  onAddCandidate(form: any) {
    console.log(form);

     this.em = form.em;
     this.name= form.name;
     this.roll= form.roll;

      const temp={name:this.name,
        roll_no: this.roll,
        email:this.em
      };

          this.spinner.show();
      this.loginservice.addCandidate(temp)
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
            // this.showMessage('successfully registered !');
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
        
        }
    
      ngOnInit() {
      }
}




