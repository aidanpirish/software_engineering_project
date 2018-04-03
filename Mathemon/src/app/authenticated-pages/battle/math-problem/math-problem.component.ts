import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { problem } from '../../../interfaces/problem.interface';
import { BattleService } from '../battle.service';
import { CurrentBattleStatusService } from '../current-battle-status.service';

@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.scss'],
  providers:[]
})
export class MathProblemComponent implements OnChanges {

  @Input() problemNumber: number;
  problem:problem;
  isPositionQuestion:boolean = false;
  solution:number;

  constructor(private battleService: BattleService, private currentBattleStatusService:CurrentBattleStatusService) { 

  }

  ngOnChanges() {
    this.getProblem(this.problemNumber);
  }

  getProblem(problemNumber:number){
    switch(problemNumber){
      case 1:
        this.problem = this.battleService.problem1.value;
        this.solution = this.battleService.problem1Solution.value;
        this.checkIsPoitionQuesiton(this.battleService.problem1.value);
        break;
      case 2:
        this.problem = this.battleService.problem2.value;
        this.solution = this.battleService.problem2Solution.value;
        this.checkIsPoitionQuesiton(this.battleService.problem2.value);
        break;
      case 3:
        this.problem = this.battleService.problem3.value;
        this.solution = this.battleService.problem3Solution.value;
        this.checkIsPoitionQuesiton(this.battleService.problem3.value);
        break;
      case 4:
        this.problem = this.battleService.problem4.value;
        this.solution = this.battleService.problem4Solution.value;
        this.checkIsPoitionQuesiton(this.battleService.problem4.value);
        break;
    }
  }

  checkIsPoitionQuesiton(problem:problem){
    if( problem.expression== 'ones' || problem.expression== 'tens' ||problem.expression== 'hundreds'){
        this.isPositionQuestion = true;
      }
    else{
      this.isPositionQuestion = false;
    }
  }

  checkAnswer(answer:number){
    if(this.currentBattleStatusService.isAttacking.value){
      if(answer == this.solution){
        this.battleService.setSolvedResult('Correct!');
        let monster = this.currentBattleStatusService.monster.value;
        monster.hp = monster.hp - 1;
        this.currentBattleStatusService.monster.next({...monster});
        
      }
      else{
        this.battleService.setSolvedResult('Wrong!');
      }
    }
    else{
      if(answer == this.solution){
        this.battleService.setSolvedResult('Correct!');
      }
      else{
        this.battleService.setSolvedResult('Wrong!');
        let user = this.currentBattleStatusService.user.value;
        user.hp = user.hp - 1;
        this.currentBattleStatusService.user.next({...user});
      }
    }
      

  }

}
