import { Component, OnInit} from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { Teacher } from '../interfaces/user.interface';

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


  submitData(newTeacher:Teacher):void {
    this.signupService.addNewTeacher(newTeacher);
    this.router.navigate(['/student-login']);
  }

}
