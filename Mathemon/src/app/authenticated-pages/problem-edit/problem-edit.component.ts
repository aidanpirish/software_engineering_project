import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global/global.service';
import { problem } from '../../interfaces/problem.interface';
import { Router } from '@angular/router';
import { ProblemEditService } from './problem-edit.service';

@Component({
  selector: 'app-problem-edit',
  templateUrl: './problem-edit.component.html',
  styleUrls: ['./problem-edit.component.scss'],
  providers: [ProblemEditService]
})
export class ProblemEditComponent {

  questions: problem[];
  addSubQuestions: any[] = new Array<any>();
  onesTensQuestions: any[] = new Array<any>();

  constructor(private global: GlobalService, private router: Router, private PEService: ProblemEditService) {
    this.PEService.questions.subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
      this.sortProblems();
    });
  }

  //sorts the problems into their different types
  sortProblems() {
    this.onesTensQuestions = new Array<any>();
    this.addSubQuestions = new Array<any>();
    for (let problem of this.questions) {
      if (problem.expression == 'ones' || problem.expression == 'tens' || problem.expression == 'hundreds') {
        this.onesTensQuestions.push(problem);
      }
      else {
        this.addSubQuestions.push(problem);
      }
    }
  }

  // Takes in problem id and hands problem to service to do the actual change
  // problem is
  editProblem(question: any) {
    this.PEService.editQuestion(question);
  }

  //hand problem to service to do upload to database
  addProblem(problem: problem) {
    this.PEService.addQuestion(problem);
  }

  //hand problem id to serivce to do delete from database
  deleteProblem(question: any) {
    this.PEService.deleteQuestion(question);
  }


}
