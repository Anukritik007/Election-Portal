import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginVoter(body:any)
  {
    return this.http.post('https://r49y3uboc9.execute-api.us-east-2.amazonaws.com/develop/login-voter',body,{
      observe:'body'
      })
  }

  addCandidate(body:any)
  {
    
    return this.http.post('https://r49y3uboc9.execute-api.us-east-2.amazonaws.com/develop/add-candidate',body,{
      observe:'body'
  })
  }
  
  addVoter(body:any)
  {
    return this.http.post('https://r49y3uboc9.execute-api.us-east-2.amazonaws.com/develop/add-voter',body,{
      observe:'body'
  })
  }

  getCandidateDetails(body:any){
    return this.http.post('https://r49y3uboc9.execute-api.us-east-2.amazonaws.com/develop/get-candidate-details',body,{
      observe:'body'
  })
  }

  addVote(body:any){
    return this.http.post('https://r49y3uboc9.execute-api.us-east-2.amazonaws.com/develop/update-vote',body,{
      observe:'body'
  })
  }

  getWinner(body:any){
    return this.http.post('https://r49y3uboc9.execute-api.us-east-2.amazonaws.com/develop/get-winner',body,{
      observe:'body'
  })
  }

  getChoice(body:any){
    return this.http.post('https://r49y3uboc9.execute-api.us-east-2.amazonaws.com/develop/get-voter-choice',body,{
      observe:'body'
  })
  }
  addChoiceToVoter(body:any){
    return this.http.post('https://r49y3uboc9.execute-api.us-east-2.amazonaws.com/develop/add-choice-of-voter',body,{
      observe:'body'
  })
  }

}

