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
  Name:string=localStorage.getItem('voterName');
  choice:string='nothing';
  disablebutton:boolean=false;

  constructor(private router: Router, private loginservice:LoginService, private spinner: NgxSpinnerService) { 

  }

  CastVote()
  {
    console.log(this.choice); //string
    if(this.choice == 'nothing'){
      alertify.alert('Please select a candidate then click the button !');
    }
console.log(this.Name);
      for( let i=0;i<this.arr.length;i++)
      {
        console.log(this.arr);
        if(this.arr[i].Roll == this.choice)
        {
          console.log('Incrementing vote by 1 in arr[] received OnInit');
          let newcount=this.arr[i].currentVotes + 1;
          console.log(newcount);
          
          
          let send={
            "choice":Number(this.choice),   //typecasting
            "newCountOfVotes": newcount
          };

          let voterChoice={
            "voterRoll": Number(localStorage.getItem('voterRoll')),
            "voterChoice":this.choice
          }

          this.spinner.show();
          this.loginservice.addChoiceToVoter(voterChoice)
          .subscribe(
            (data:any)=>
            {
              console.log('Step 2');
              console.log(data);
              
            },
            error=> 
                  {
                  console.log('some error in reaching Database !');
                  }
          );
          
          
            this.loginservice.addVote(send)
            .subscribe(
              (data:any)=>
               {
                console.log('Step 3');
                this.spinner.hide();
                alertify.alert('Congratulations! your vote has been recorded. You can now logout');
                    console.log(data);
                    this.disablebutton=true;
        
                },
                  error=> 
                  {
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

      let roll={
        "voterRoll":localStorage.getItem('voterRoll')
      }
      this.loginservice.getChoice(roll)
      .subscribe(
        (data:any)=>
        {
          console.log('Step 1');
          console.log(data);
          if(data != 0)
          {
            console.log(data);
          this.router.navigate(['']);
          alertify.alert('You have already voted !');
        }
          },
        error=> 
            {
            console.log('some error in reaching Database !');
            }
      );

    }
  

}
