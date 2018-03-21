import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.login().subscribe( () => {
      console.log('clicked login');
      if(this.loginService.isLoggedIn){
        console.log('Login Worked');
        let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/login'
      }
    })
  }

}
