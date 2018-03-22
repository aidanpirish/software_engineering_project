import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router:Router){
    
  }

  //TODO: Make isLoggedIn a behaviour subject so it can emit it's value when needed
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.redirectUrl = '/login';
    this.router.navigate([this.redirectUrl]);
  }
  
}
