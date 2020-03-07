import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import{Routes,RouterModule, Router} from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { WatchesComponent } from './watches/watches.component';
import { EarphonesComponent } from './earphones/earphones.component';

const appRoutes:Routes=[
{path :'login' ,component:LoginComponent},
{path:'signup' ,component:SignupComponent},
{path:'home',component:HomeComponent ,children:[
 {path:'mobile' , component:MobileComponent},
 {path:'watches' , component:WatchesComponent},
 {path:'earphones' , component:EarphonesComponent}
]
},
{path:'',pathMatch:'full',redirectTo:'/login'},
{path:'**',redirectTo:'/login'}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    MobileComponent,
    WatchesComponent,
    EarphonesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
