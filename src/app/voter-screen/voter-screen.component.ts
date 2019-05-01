import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as alertify from 'alertify.js';
import {LoginService} from '../login.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-voter-screen',
  templateUrl: './voter-screen.component.html',
  styleUrls: ['./voter-screen.component.css']
})
export class VoterScreenComponent implements OnInit {

  arr:any[]=[];
  Name:string;
  choice:number;
  disablebutton:boolean=false;

  constructor(private router: Router, private loginservice:LoginService, private spinner: NgxSpinnerService) { 

  }

  CastVote()
  {
    console.log(typeof(this.choice)); //string

      for( let i=0;i<this.arr.length;i++)
      {
        console.log(this.arr);
        if(this.arr[i].Roll == this.choice)
        {
          console.log('Incrementing vote by 1 in arr[] received OnInit');
          let newcount=this.arr[i].currentVotes + 1;
          console.log(newcount);
          
          this.spinner.show();
          let send={
            "choice":Number(this.choice),   //typecasting
            "newCountOfVotes": newcount
          };

          //TODO:
          //create a service method addChoice , send choice to voter databse
          // check if choice exists in database then display alert thet already voted and logout

          this.loginservice.addVote(send)
          .subscribe(
            (data:any)=>
             {
                this.spinner.hide();
                  console.log(data);
                  this.disablebutton=true;
      
              },
                error=> 
                {
                this.spinner.hide();
                console.log('some error in reaching Database !');
                }
                );
        }
      }
    
  }

  onLogoutLeave(){
    localStorage.clear();
    this.router.navigate(['']);

    alertify.alert('Successfully Logged out !');
  }

  ngOnInit() {
    this.spinner.show();
    let dummy = {"something":"dummy value"};

    this.loginservice.getCandidateDetails(dummy)
    .subscribe(
      (data:any)=>      //type 'any' is important to use map
       {
          this.spinner.hide();
            console.log(data);

            data.map(o => {
              return { Name: o.Name, Roll: o.Roll ,currentVotes: o.totalVotes};
            }).forEach(o => this.arr.push(o));
           
           console.log(this.arr);

        },
          error=> 
          {
          this.spinner.hide();
          console.log('some error in reaching Database !');
          }
          );
    

    }
  

}
