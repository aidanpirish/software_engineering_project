import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global/global.service';
import { Problem } from '../../interfaces/problem.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problem-edit',
  templateUrl: './problem-edit.component.html',
  styleUrls: ['./problem-edit.component.scss']
})
export class ProblemEditComponent implements OnInit {

  //problems:Problem[];

  constructor(private global: GlobalService, private router: Router) {
   }

  ngOnInit() {
    
  }

  // editProblem(problem:Problem){
    
  // }

  // addProblem(problem:Problem){

  // }

  // deleteProblem(problem:Problem){
    
  // }


}
