import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  userDetails={
    data:[
      {username:'pranjal',
         password:'verma'}

    ]
  }
 
  constructor() {}

  loginDetails(){ 
    
    return this.userDetails;
  }
signupData(data:any){
  this.userDetails.data.push(data);
}
 
  }

 

