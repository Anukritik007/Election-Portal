import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AdminComponent } from './login-screen/admin/admin.component';
import { VoterComponent } from './login-screen/voter/voter.component';
import { FormsModule } from '@angular/forms';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { VoterScreenComponent } from './voter-screen/voter-screen.component';
import { AddCandidateComponent } from './admin-screen/add-candidate/add-candidate.component';
import { AddVoterComponent } from './admin-screen/add-voter/add-voter.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { GetResultComponent } from './get-result/get-result.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { WinnerComponent } from './get-result/winner/winner.component';
import { IndividualVoteComponent } from './get-result/individual-vote/individual-vote.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import {LoginService} from './login.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    AdminComponent,
    VoterComponent,
    AdminScreenComponent,
    VoterScreenComponent,
    AddCandidateComponent,
    AddVoterComponent,
    GetResultComponent,
    WinnerComponent,
    IndividualVoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatDividerModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule
  ],
  entryComponents: [
    WinnerComponent,
    IndividualVoteComponent
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
