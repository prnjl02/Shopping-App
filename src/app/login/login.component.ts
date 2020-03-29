import { Component, OnInit } from '@angular/core';
import {LoginDataService} from 'src/app/login-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password='';
  loginDetailsArr=[];
  constructor(private LogindataService: LoginDataService ,
              private router:Router) { }

  ngOnInit(): void {
  }
login(){
  this.loginDetailsArr=this.LogindataService.loginDetails().data;  
  console.log(this.loginDetailsArr);
    for(let i=0;i<this.loginDetailsArr.length;i++){
      if((this.username==this.loginDetailsArr[i].username) && (this.password==this.loginDetailsArr[i].password)){
       this.router.navigate(['home']);
      }   
      // else{
      //   alert(`Username or Password is incorrect
      //   Try Signup if not an existing user`);
      // }
  }
  
}

clearAll(){
  this.username='';
  this.password='';
}

signUp(){  
  this.router.navigate(['/signup'])
}
  }


