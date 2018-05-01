import { Injectable, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Student, Teacher } from '../../interfaces/user.interface';
import { GlobalService } from '../../global/global.service';
import { User } from '@firebase/auth-types';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SeeLogsService{

  //databaser variables
  studentCollections: AngularFirestoreCollection<Student>;
  studentsO:Observable<Student[]>
  studentLogsCollections: AngularFirestoreCollection<any>;
  studentsLogsO:Observable<any[]>

  studentLog: AngularFirestoreDocument<any>;
  studentLogB:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  studentLogO: Observable<any>


  //Students Array
  teachersStudent: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>(null);
  studentsLogs: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);

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
      console.log(studentProfiles);
      this.teachersStudent.next(studentProfiles);
     });

  }

  public getStudetnLogs(studentID:string){
    this.currStudentID = studentID;

    this.studentLogsCollections = this.db.collection('Students').doc(studentID).collection('Logs');
    this.studentsLogsO = this.studentLogsCollections.snapshotChanges().map(actions => {
      return actions.map(d => {
        const log = d.payload.doc.data();
        const id = d.payload.doc.id;
        return { id, ...log };
      });
    });
    this.studentsLogsO.subscribe( logsDoc => {
      this.studentsLogs.next(logsDoc)
     });

  }

  public getSingleLog(logId:string){
    this.studentLog = this.db.collection('Students').doc(this.currStudentID).collection('Logs').doc(logId);
    this.studentLogO = this.studentLog.valueChanges();
    this.studentLogO.subscribe( logsDoc => {
      // let newLog = Object.keys(logsDoc).map(key => {
      //   return [Number(key),logsDoc[key]];
      // });
      this.studentLogB.next(Object.values(logsDoc));
     });

  }


}

