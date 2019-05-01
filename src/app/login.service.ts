import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginVoter(body:any)
  {
    return this.http.post('login-voter',body,{
      observe:'body'
      })
  }

  addCandidate(body:any)
  {
    
    return this.http.post('add-candidate',body,{
      observe:'body'
  })
  }
  
  addVoter(body:any)
  {
    return this.http.post('add-voter',body,{
      observe:'body'
  })
  }

  getCandidateDetails(body:any){
    return this.http.post('get-candidate-details',body,{
      observe:'body'
  })
  }

  addVote(body:any){
    return this.http.post('update-vote',body,{
      observe:'body'
  })
  }

}

