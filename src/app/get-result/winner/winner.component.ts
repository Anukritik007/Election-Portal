import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

winner:string;
numberOfVotes:number;
manyWinners:boolean=false;
listOfWinners:any[];

  ngOnInit() {

    let dummy={
      "something":"dummy"
    };

    this.loginservice.getWinner(dummy)
    .subscribe(
      (data:any)=>{
        console.log(data);
        if(data.draw)
        {
          this.manyWinners=true;
          this.listOfWinners= data.Winner;
          
          this.numberOfVotes= data.votes;
        }
        else{
          this.winner= data.Winner;
          this.numberOfVotes= data.votes;
        }
          
      },
      (error)=>{
        console.log('some error in reaching Database !');
      }
    );
    
  }

}
