import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../interfaces/user.interface';
import { debug } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private loginService: LoginService, public router: Router) { }

  _email:string ;
  _password:string;

  get email() {
    return this._email;
  }
  set email(value:string) {
    this._email = value;
  }

  get password() {
    return this._password;
  }
  set password(value:string){
    this._password = value;
  }


  login(){
    this.loginService.login(
      //create a User object to pass to the method
      {username:this.email, 
       password:this.password}
    ).subscribe( () => {
      if(this.loginService.isLoggedIn){
        let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/home'

        this.router.navigate([redirect]);
      }
    })
  }

}
