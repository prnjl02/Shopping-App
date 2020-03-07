import { Component, OnInit } from '@angular/core';
import {LoginDataService} from 'src/app/login-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usernameSignup='';
  passwordSignup='';

  constructor(private LogindataService: LoginDataService,
              private router:Router ) { }

  ngOnInit(): void {
  }
  Submit(){
  this.LogindataService.signupData(
    {
      username:this.usernameSignup,
      password:this.passwordSignup
    }
  )
  this.router.navigate(['/login'])
  }

  Clear(){
    this.usernameSignup='';
    this.passwordSignup='';
  }
}
