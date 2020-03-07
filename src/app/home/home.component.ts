import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

//   mobile(){
// this.router.navigate(['/home','mobile']);
//   }

//  watches(){
//    this.router.navigate(['/home','watches']);
//       }

//       earphones(){
//         this.router.navigate(['home','earphones']);
//           }
}
