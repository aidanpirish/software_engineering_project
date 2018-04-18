import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User, Teacher, Student } from '../interfaces/user.interface';
import { Avatar } from '../interfaces/avatar.interface';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';


/**
 *
 * This service is going to house the currently logged in user as well as any other
 * global variables we may need as development continues
 *
 */
@Injectable()
export class GlobalService implements OnInit {

  avatarsCollection:AngularFirestoreCollection<Avatar>;
  studentsCollection:AngularFirestoreCollection<Student>;

  oavatars:Observable<Avatar[]>;

  currentUserTeacher: BehaviorSubject<Teacher> = new BehaviorSubject<Teacher>(null);
  currentUserStudent: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);

  constructor(private db: AngularFirestore) {

  }

  ngOnInit(){
  }

  getAvatarList():void{
    this.avatarsCollection =  this.db.collection('Avatars');
    this.oavatars =  this.avatarsCollection.valueChanges();

  }

  setNewAvatar(user:Student | Teacher){
      this.db.collection('Students').doc(`${user.refId}`).update(user);


  }

}
