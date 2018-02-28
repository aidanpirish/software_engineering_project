import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { SignUp } from './signup.definition';

@Injectable()
export class SignupService {

  teacherCollection:AngularFirestoreCollection<SignUp>

  constructor(private db: AngularFirestore) {
    this.teacherCollection = db.collection('Teachers');
   }

   addNewTeacher(teacher:SignUp):void {
    this.teacherCollection.add({
      email:teacher.email,
      name:teacher.name,
      password:teacher.password
    });
   }

}
