import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as alertify from 'alertify.js';
import { MatDialog } from '@angular/material';
import {WinnerComponent} from './winner/winner.component';
import {IndividualVoteComponent} from './individual-vote/individual-vote.component';

@Component({
  selector: 'app-get-result',
  templateUrl: './get-result.component.html',
  styleUrls: ['./get-result.component.css']
})
export class GetResultComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  onLogoutLeave(){
    localStorage.clear();
    this.router.navigate(['']);

    alertify.alert('Successfully Logged out !');
  }

  GetWinnerOpenDialog(): void {
    const dialogRef = this.dialog.open(WinnerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  
  GetIndividualVoteOpenDialog(): void {
    const dialogRef = this.dialog.open(IndividualVoteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  ngOnInit() {
  }

}
