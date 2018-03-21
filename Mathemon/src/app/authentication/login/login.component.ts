import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private loginService: LoginService, public router: Router) { }

  login(){
    this.loginService.login().subscribe( () => {
      if(this.loginService.isLoggedIn){
        let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/home'

        this.router.navigate([redirect]);
      }
    })
  }

}
