import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  @Input()
  user: User;
  constructor(private router:Router){
    
  }

  //TODO: Make isLoggedIn a behaviour subject so it can emit it's value when needed
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    this.checkTeacherLogin();
    return Observable.of(true).do(val => this.isLoggedIn = true);
  }

  private checkTeacherLogin(){
    
  }

  logout(): void {
    this.isLoggedIn = false;
    this.redirectUrl = '/login';
    this.router.navigate([this.redirectUrl]);
  }
  
}
