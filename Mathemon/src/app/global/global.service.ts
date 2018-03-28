import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User, Teacher, Student } from '../interfaces/user.interface';


/**
 * 
 * This service is going to house the currently logged in user as well as any other
 * global variables we may need as development continues
 * 
 */
@Injectable()
export class GlobalService {

  currentUser: BehaviorSubject<User | Teacher | Student> = new BehaviorSubject<User>(null);
  isTeacher: BehaviorSubject<boolean>;
  isStudent: BehaviorSubject<boolean>;
  
  constructor() { 
    // this.currentUser.subscribe(() => {
    // })
  }



}
