import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mathemon';

  items:Observable<any>;

  constructor(
    db: AngularFirestore,
    private loginService:LoginService
  ){
    this.items = db.collection('items').valueChanges();
  }

  get isLoggedIn(){
    return this.loginService.isLoggedIn;
  }

  logout() {
    this.loginService.logout();
  }

}
