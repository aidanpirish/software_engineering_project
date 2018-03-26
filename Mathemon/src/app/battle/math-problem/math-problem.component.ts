import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { problem } from '../../interfaces/problem.interface';
import { BattleService } from '../battle.service';

@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.scss'],
  providers:[]
})
export class MathProblemComponent implements OnInit {

  @Input() problem: problem;
  solution:number;

  constructor(private battleService: BattleService) { }

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
    if(answer == this.solution){
      this.battleService.setSolvedResult('Correct!');
    }
    else{
      this.battleService.setSolvedResult('Wrong!');
    }
    

  }

}
