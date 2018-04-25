import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global/global.service';
import { problem } from '../../interfaces/problem.interface';
import { Router } from '@angular/router';
import { ProblemEditService } from './problem-edit.service';

@Component({
  selector: 'app-problem-edit',
  templateUrl: './problem-edit.component.html',
  styleUrls: ['./problem-edit.component.scss'],
  providers:[ProblemEditService]
})
export class ProblemEditComponent {

  questions:problem[];
  addSubQuestions:any[];
  onesTensQuestions:any[];

  constructor(private global: GlobalService, private router: Router, private PEService: ProblemEditService) {
    this.PEService.questions.subscribe(questions => {
      this.questions = questions;
      this.sortProblems();
    });
  }

  //sorts the problems into their different types
  sortProblems() {
    for(let problem of this.questions){
      if(problem.expression== 'ones' || problem.expression== 'tens' ||problem.expression== 'hundreds' ){
        this.onesTensQuestions.push(problem);
      }
      else{
        this.addSubQuestions.push(problem);
      }
    }
  }

  // Takes in problem id and hands problem to service to do the actual change
  editProblem(problemId:string){
    this.PEService.editQuestion(problemId);
  }

  //hand problem to service to do upload to database
  addProblem(problem:problem){
    this.PEService.addQuestion(problem);
  }

  //hand problem id to serivce to do delete from database
  deleteProblem(problemId:string){
    this.PEService.deleteQuestion(problemId);
  }


}
