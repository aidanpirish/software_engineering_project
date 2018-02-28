import { Component, OnInit} from '@angular/core';
import { SignupService } from './signup.service';
import { SignUp } from './signup.definition';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:SignupService) { 
  }
  
  ngOnInit() {
  }
  

  submitData(newTeacher:SignUp):void {
    this.signupService.addNewTeacher(newTeacher);
  }

}
