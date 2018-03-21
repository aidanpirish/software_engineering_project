import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './authentication/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mathemon';
  items:Observable<any>;
  constructor(db: AngularFirestore, loginService: LoginService){
    let isLoggedIn = loginService.isLoggedIn;
    this.items = db.collection('items').valueChanges();
  }
}
