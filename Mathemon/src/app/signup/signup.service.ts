import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { SignUp } from './signup.definition';

@Injectable()
export class SignupService {

  teacherCollection:AngularFirestoreCollection<SignUp>
  studentCollection:AngularFirestoreCollection<SignUp>

  constructor(private db: AngularFirestore) {
    this.teacherCollection = db.collection('Teachers');
    this.studentCollection = db.collection('Students');
   }

   addNewTeacher(teacher:SignUp):void {
    this.teacherCollection.add({
      username:teacher.username,
      name:teacher.name,
      password:teacher.password
    });
   }

   addNewStudent(student:SignUp):void {
     this.studentCollection.add({
       username:student.username,
       name:student.name,
       password:student.password
     });
   }

}
