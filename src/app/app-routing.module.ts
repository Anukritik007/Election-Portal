import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {AdminComponent} from './login-screen/admin/admin.component';
import {VoterComponent} from './login-screen/voter/voter.component';
import {VoterScreenComponent} from './voter-screen/voter-screen.component';
import {AdminScreenComponent} from './admin-screen/admin-screen.component';
import {AddCandidateComponent} from './admin-screen/add-candidate/add-candidate.component';
import {AddVoterComponent} from './admin-screen/add-voter/add-voter.component';
import {GetResultComponent} from './get-result/get-result.component';

const appRoute:Routes=[
  {
    path:'voterlogin',component:LoginScreenComponent,
  children:[{path:'',component:VoterComponent}]
  },
  
  {path:'adminlogin',component:LoginScreenComponent,
  children:[{path:'',component:AdminComponent}]
  },
  
  {path:'voterscreen',component:VoterScreenComponent},

  {
    path:'adminscreen',component:AdminScreenComponent,
    children:[  
      {path:'addcandidate',component:AddCandidateComponent},

    {path:'addvoter',component:AddVoterComponent}]
    },


  {path:'getresult',component:GetResultComponent},
  
  {path:'',redirectTo:'/voterlogin',pathMatch:'full'}
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
