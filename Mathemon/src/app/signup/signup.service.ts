import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { SignUp } from './signup.definition';

@Injectable()
export class SignupService implements OnInit {

  teacherCollection:AngularFirestoreCollection<SignUp>
  studentCollection:AngularFirestoreCollection<SignUp>

  constructor(private db: AngularFirestore) {
    this.teacherCollection = this.db.collection('Teachers');
    this.studentCollection = this.db.collection('Students');
   }
   ngOnInit(){
   }

   addNewTeacher(teacher:SignUp):void {
    this.teacherCollection.add({
      username:teacher.username,
      name:teacher.name,
      password:teacher.password
    })
    .then(value =>{
      this.teacherCollection.doc(`${value.id}`).update(
        {refId:value.id}
      ).then(()=>{
        this.db.collection('Questions').snapshotChanges().subscribe(docs => {
          for(let doc of docs){
            this.db.collection(`Teachers/${value.id}/Questions`).add(doc.payload.doc.data);
          }
        })
      })
   });
  }

   addNewStudent(student:SignUp):void {
     this.studentCollection.add({
       username:student.username,
       name:student.name,
       password:student.password,
       picture:""
     })
     .then(value => {
       this.studentCollection.doc(`${value.id}`).update({
         refId:value.id
       });
     });
   }

}
