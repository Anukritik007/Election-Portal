import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertify.js';
import {LoginService} from '../../login.service';
import { NgxSpinnerService } from 'ngx-spinner';

export interface CandidateData {
  name: string;
  RollNumber: number;
  votes: number;

}

// let ELEMENT_DATA: PeriodicElement[]=
// [
//   {RollNumber: 1, name: 'Hydrogen', votes: 1},
//   {RollNumber: 2, name: 'Helium', votes: 4},
//   {RollNumber: 3, name: 'Lithium', votes: 6},
//   {RollNumber: 4, name: 'Beryllium', votes: 9},
//   {RollNumber: 5, name: 'Boron', votes: 10},
//   {RollNumber: 6, name: 'Carbon', votes: 1},
//   {RollNumber: 7, name: 'Nitrogen', votes: 14}

// ];

@Component({
  selector: 'app-individual-vote',
  templateUrl: './individual-vote.component.html',
  styleUrls: ['./individual-vote.component.css']
})
export class IndividualVoteComponent implements OnInit {

  constructor(private loginservice:LoginService, private spinner: NgxSpinnerService) { }

  arr: any[]=[];

  displayedColumns: string[] = ['Roll Number', 'Name', 'Votes'];

  dataSource  :CandidateData[] ;   //step 1

  ngOnInit() {

    //this.spinner.show(); // spinner doesnt work
    let dummy = {"something":"dummy value"};

    this.loginservice.getCandidateDetails(dummy)
    .subscribe(
          (data:any)=>
       {
          // this.spinner.hide();
            console.log(data);

            data.map(o => {
              return { name: o.Name, RollNumber: o.Roll ,votes: o.totalVotes};
            }).forEach(o => this.arr.push(o));
           
           console.log(this.arr);

           this.dataSource= this.arr;  //step 2

        },
          error=> 
          {
          // this.spinner.hide();
          console.log('some error in reaching Database !');
          }
        );
  }

}
