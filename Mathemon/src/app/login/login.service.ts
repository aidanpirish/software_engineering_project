import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Router } from '@angular/router';
import { User, Teacher, Student } from '../interfaces/user.interface';
import { GlobalService } from '../global/global.service';


@Injectable()
export class LoginService {

  //variables for if the user logging in is a teacher
  teachersCollection:AngularFirestoreCollection<Teacher>;
  teachersObservable: Observable<Teacher[]>;
  teachers: Teacher[];

  //variables for if the user logging in is a student
  studentsCollection:AngularFirestoreCollection<Student>;
  studentsObservable: Observable<Student[]>;
  students: Student[];

  //go get teacher and student data from the database
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
    this.studentsCollection = db.collection('Students');
    this.studentsObservable = this.studentsCollection.valueChanges();
    this.studentsObservable.subscribe(students => {
      this.students = students;
    });
  }

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  //attempt to login the user
  login(user:User): Observable<boolean> {
    if(user.type == 'teacher'){
      return Observable.of(this.checkTeacherLogin(user)).do(value => this.isLoggedIn = value);
    }
    else{
      return Observable.of(this.checkStudentLogin(user)).do(value => this.isLoggedIn = value);
    }
  }

  //user was a teahcer, check teacher accounts to see if valid
  private checkTeacherLogin(user:User){
    let result = false;
    for(let teacher of this.teachers){
      if(teacher.username == user.username){
        if(teacher.password == user.password){
          let currentUser = Object.assign({type:user.type},teacher);
          this.global.currentUser.next(currentUser);
            result = true;
        }
      }
    }
    return result;
  }

  //user was a student, check student accounts to see if valid
  private checkStudentLogin(user:User){
    let result = false;
    for(let student of this.students){
      if(student.username == user.username){
        if(student.password == user.password){
          let currentUser = Object.assign({type:user.type},student);
          this.global.currentUser.next(currentUser);
            result = true;
        }
      }
    }
    return result;
  }

  //user wants to logout, proceed to doing so
  logout(): void {
    this.isLoggedIn = false;
    this.redirectUrl = '/student-login';
    this.router.navigate([this.redirectUrl]);
  }
  
}
