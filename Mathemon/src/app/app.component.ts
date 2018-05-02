import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login/login.service';
import { GlobalService } from './global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Mathemon';

  items:Observable<any>;
  isTeacher:boolean = false;

  constructor(
    private db: AngularFirestore,
    private loginService:LoginService,
    private global:GlobalService
  ){
  }

  ngOnInit(){
    this.items = this.db.collection('items').valueChanges();
    this.global.currentUserTeacher.subscribe(value => {
      if(value != null){
        this.isTeacher = true;
      }
    })
  }

  ngOnChanges(){
  }


  get isLoggedIn(){
    return this.loginService.isLoggedIn;
  }

  logout() {
    this.loginService.logout();
  }

}
