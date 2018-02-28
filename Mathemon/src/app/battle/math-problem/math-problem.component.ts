import { Component, OnInit, Input } from '@angular/core';
import { problem } from '../../interfaces/problem.interface';

@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.scss']
})
export class MathProblemComponent implements OnInit {

  @Input() problem: problem;
  solution:number;
  isCorrect:string;

  constructor() { }

  ngOnInit() {
    this.findSolution();
  }

  findSolution() {
    var leftSide:number = this.problem.left_side;
    var rightSide:number  = this.problem.right_side;
    switch(this.problem.expression) {
      case '+': {
        this.solution = leftSide + rightSide;
        break;
      }
      case '-': {
        this.solution = leftSide - rightSide;
        break;
      }

    }
  }
  
  checkAnswer(answer:number){
    console.log(answer)
    if(answer == this.solution){
      this.isCorrect = 'true';
    }
    else{
      this.isCorrect = 'false';
    }

  }

}
