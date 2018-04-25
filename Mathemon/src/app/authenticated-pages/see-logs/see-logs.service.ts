import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Student, Teacher } from '../../interfaces/user.interface';
import { GlobalService } from '../../global/global.service';
import { User } from '@firebase/auth-types';

@Injectable()
export class SeeLogsService implements OnInit{

  //databaser variables
  studentCollections: AngularFirestoreCollection<Student>;
  studentsO:Observable<Student[]>

  //Students Array
  teachersStudent: Student[] = [];

  //teacher ID
  teacherID: String = `${this.global.currentUserTeacher.value.refId}`


  constructor(
    private db: AngularFirestore,
    private global: GlobalService
  ) {

    //get students
    this.studentCollections =  this.db.collection('Students', ref => ref.where('teacherID', '==', this.teacherID ));
    this.studentsO = this.studentCollections.valueChanges();


  ngOnInit(){
  }

}

