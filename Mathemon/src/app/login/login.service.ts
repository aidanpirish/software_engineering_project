import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Router } from '@angular/router';
import { User, Teacher } from '../interfaces/user.interface';
import { GlobalService } from '../global/global.service';


@Injectable()
export class LoginService {

  teachersCollection:AngularFirestoreCollection<Teacher>;
  teachersObservable: Observable<Teacher[]>;
  teachers: Teacher[];

  constructor(
    private router:Router, 
    private db: AngularFirestore,
    private global: GlobalService
  ){
    this.teachersCollection = db.collection('Teachers');
    this.teachersObservable = this.teachersCollection.valueChanges();
    this.teachersObservable.subscribe(teachers => {
      this.teachers = teachers;
    });
  }

  //TODO: Make isLoggedIn a behaviour subject so it can emit it's value when needed
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(user:User): Observable<boolean> {
    return Observable.of(this.checkTeacherLogin(user)).do(value => this.isLoggedIn = value);
  }

  private checkTeacherLogin(user:User){
    let result = false;
    for(let teacher of this.teachers){
      if(teacher.username == user.username){
        if(teacher.password == user.password){
          this.global.currentUser.next(teacher);
            result = true;
        }
      }
    }
    return result;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.redirectUrl = '/login';
    this.router.navigate([this.redirectUrl]);
  }
  
}
