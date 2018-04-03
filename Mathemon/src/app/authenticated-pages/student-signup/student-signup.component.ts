import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../signup/signup.definition';
import { SignupService } from '../../signup/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent implements OnInit {

  constructor(private signupService:SignupService, public router: Router) { }

  ngOnInit() {
  }

  submitData(newStudent:SignUp):void {
    this.signupService.addNewStudent(newStudent);
    this.router.navigate(['/signup-success']);
  }

}
