import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { GlobalService } from '../global/global.service';
import { Student, Teacher } from '../interfaces/user.interface';

@Injectable()
export class SignupService implements OnInit {

  teacherCollection:AngularFirestoreCollection<Teacher>
  studentCollection:AngularFirestoreCollection<Student>

  constructor(
    private db: AngularFirestore,
    private global: GlobalService
  ) {
    this.teacherCollection = this.db.collection('Teachers');
    this.studentCollection = this.db.collection('Students');
  }
  ngOnInit(){
   }

   addNewTeacher(teacher:Teacher):void {
    this.teacherCollection.add({
      hp:100,
      username:teacher.username,
      name:teacher.name,
      password:teacher.password,
      picture:'https://firebasestorage.googleapis.com/v0/b/mathemon-bacc4.appspot.com/o/user_avatars%2FProfessor_Oak_XY.png?alt=media&token=2f5e5fba-41db-4b14-85a3-80921bdc8c1d',
      type:'teacher',
      refId:''
    })
    .then(value =>{
      this.teacherCollection.doc(`${value.id}`).update(
        {refId:value.id}
      ).then(()=>{
        this.db.collection('Questions').valueChanges().subscribe(docs => {
          for(let doc of docs){
            this.db.collection('Teachers').doc(`${value.id}`).collection('Questions').add(doc)
            .catch(error => {
              console.log(error);
            })
          }
        });
      })
    });
  }

   addNewStudent(student:Student):void {
     this.studentCollection.add({
       username:student.username,
       name:student.name,
       password:student.password,
       teacherId:this.global.currentUserTeacher.value.refId,
       picture:"",
       hp:4,
       type:'student',
       refId:''
     })
     .then(value => {
       this.studentCollection.doc(`${value.id}`).update({
         refId:value.id
       });
     });
   }

}
