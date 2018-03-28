import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User, Teacher } from '../interfaces/user.interface';


/**
 * 
 * This service is going to house the currently logged in user as well as any other
 * global variables we may need as development continues
 * 
 */
@Injectable()
export class GlobalService {

  currentUser: Subject<User>;
  isTeacher: Subject<boolean>;
  isStudent: Subject<boolean>;
  
  constructor() { 
    this.currentUser.subscribe(() => {
      this.checkIsTeacherOrStudent();
    })
  }
  
  checkIsTeacherOrStudent(): any {
    if(this.currentUser instanceof Teacher)
  }


}
