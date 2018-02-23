import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  // login(): Observable<boolean> {
  //   return Obserservable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  // }

  logout(): void {
    this.isLoggedIn = false;
  }
  
}
