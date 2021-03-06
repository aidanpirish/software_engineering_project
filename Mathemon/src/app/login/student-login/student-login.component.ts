import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent{


  constructor(private loginService: LoginService, public router: Router) { }

  hasError:boolean = false;
  error:string = '';
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
    this.hasError = false;
    this.error = '';
    this.loginService.login(
      //create a User object to pass to the method
      {username:this.email,
       password:this.password,
       type:'student',
       refId:''
    }
    ).subscribe( () => {
      if(this.loginService.isLoggedIn){
        this.router.navigate(['/home','student']);
      }
      else{
          this.hasError = true;
          this.error = 'Invalid Username or Password';
        }
    })
  }

}
