import { Component, Input, Output, OnChanges } from '@angular/core';
import { problem } from '../../../interfaces/problem.interface';
import { BattleService } from '../battle.service';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-moveset-box',
  templateUrl: './moveset-box.component.html',
  styleUrls: ['./moveset-box.component.scss'],
  providers: []
})
export class MovesetBoxComponent {

  choseProblem:boolean = false;
  currentProblem:problem;

  constructor(private battleService: BattleService) { 
  }


  isClicked(problemNumber){
    switch(problemNumber){
      case 1: {
        this.currentProblem = this.battleService.problem1;
        this.choseProblem = true;
        break;
      }
      case 2: {
        this.currentProblem = this.battleService.problem2;
        this.choseProblem = true;
        break;
      }
      case 3: {
        this.currentProblem = this.battleService.problem3;
        this.choseProblem = true;
        break;
      }
      case 4: {
        this.currentProblem = this.battleService.problem4;
        this.choseProblem = true;
        break;
      }
      

    }
  }
}
