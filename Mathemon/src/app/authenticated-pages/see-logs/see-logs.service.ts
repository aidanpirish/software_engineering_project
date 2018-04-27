import { Injectable, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Student, Teacher } from '../../interfaces/user.interface';
import { GlobalService } from '../../global/global.service';
import { User } from '@firebase/auth-types';

@Injectable()
export class SeeLogsService{

  //databaser variables
  studentCollections: AngularFirestoreCollection<Student>;
  studentsO:Observable<Student[]>
  studentLogsCollections: AngularFirestoreCollection<any>;
  studentsLogsO:Observable<any[]>

  studentLog: AngularFirestoreDocument<any>;
  studentLogO: Observable<any>


  //Students Array
  teachersStudent: Student[] = [];
  studentsLogs: any[] = [];

  //teacher ID
  teacherId: String = `${this.global.currentUserTeacher.value.refId}`

  currStudentID: string;


  constructor(
    private db: AngularFirestore,
    private global: GlobalService
  ) {

  }

  public callStudents(){
    //get students
    this.studentCollections =  this.db.collection('Students', ref => ref.where('teacherId', '==', this.teacherId ));
    this.studentsO = this.studentCollections.valueChanges();
    this.studentsO.subscribe( studentProfiles => {
      this.teachersStudent = studentProfiles });

  }

  public getStudetnLogs(studentID:string){
    this.currStudentID = studentID;

    this.studentLogsCollections = this.db.collection('Students').doc(studentID).collection('Logs');
    this.studentsLogsO = this.studentLogsCollections.valueChanges();
    this.studentsLogsO.subscribe( logsDoc => {
      this.studentsLogs = logsDoc })

  }

  public getSingleLog(logId:string){
    this.studentLog = this.db.collection('Students').doc(this.currStudentID).collection('Logs').doc(logId);
    this.studentLogO = this.studentLogsCollections.valueChanges();
    this.studentLogO.subscribe( logsDoc => {
      this.studentLog = logsDoc })

  }


}

