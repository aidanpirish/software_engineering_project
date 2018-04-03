import { Component, Input, Output, OnChanges } from '@angular/core';
import { problem } from '../../../interfaces/problem.interface';
import { CurrentBattleStatusService } from '../current-battle-status.service';

@Component({
  selector: 'app-moveset-box',
  templateUrl: './moveset-box.component.html',
  styleUrls: ['./moveset-box.component.scss'],
  providers: []
})
export class MovesetBoxComponent {

  choseProblem:boolean = false;
  isAttackMove:boolean = true;
  currentProblem:number;

  constructor(private currentBattleStatusService: CurrentBattleStatusService) { 
    this.currentBattleStatusService.isAttacking.subscribe(value => this.isAttackMove = value);
  }


  isClicked(problemNumber){
    switch(problemNumber){
      case 1: {
        this.currentProblem = 1;
        this.choseProblem = true;
        break;
      }
      case 2: {
        this.currentProblem = 2;
        this.choseProblem = true;
        break;
      }
      case 3: {
        this.currentProblem = 3;
        this.choseProblem = true;
        break;
      }
      case 4: {
        this.currentProblem = 4;
        this.choseProblem = true;
        break;
      }
    }
  }
}
