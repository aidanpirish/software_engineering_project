import { Component, AfterContentInit, Input } from '@angular/core';
import { problem } from '../../interfaces/problem.interface';
import { BattleService } from '../battle.service';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-moveset-box',
  templateUrl: './moveset-box.component.html',
  styleUrls: ['./moveset-box.component.scss'],
  providers: [BattleService]
})
export class MovesetBoxComponent implements AfterContentInit {

  choseProblem:boolean = false;
  problems:problem[];
  problem1:problem;
  problem2:problem;
  problem3:problem;
  problem4:problem;
  currentProblem:problem;

  constructor(private battleService: BattleService) { }

  ngAfterContentInit() {
    this.battleService.problems.subscribe(data => 
      this.assignProblems(data)
    );
  }

  assignProblems(problems:problem[]):void {
    this.problem1 = problems[0];
    this.problem2 = problems[1];
    this.problem3 = problems[2];
    this.problem4 = problems[3];
  }

  isClicked(problemNumber){
    switch(problemNumber){
      case 1: {
        this.currentProblem = this.problem1;
        this.choseProblem = true;
        break;
      }
      case 2: {
        this.currentProblem = this.problem2;
        this.choseProblem = true;
        break;
      }
      case 3: {
        this.currentProblem = this.problem3;
        this.choseProblem = true;
        break;
      }
      case 4: {
        this.currentProblem = this.problem4;
        this.choseProblem = true;
        break;
      }
      

    }
  }
}
