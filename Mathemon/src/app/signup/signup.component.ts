import { Component, OnInit} from '@angular/core';
import { SignupService } from './signup.service';
import { SignUp } from './signup.definition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:SignupService, public router: Router) { 
  }
  
  ngOnInit() {
  }
  

  submitData(newTeacher:SignUp):void {
    this.signupService.addNewTeacher(newTeacher);
    this.router.navigate(['/student-login']);
  }

}
