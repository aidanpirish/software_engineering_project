import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { problem } from '../../../interfaces/problem.interface';
import { BattleService } from '../battle.service';
import { CurrentBattleStatusService } from '../current-battle-status.service';
import { GlobalService } from '../../../global/global.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.scss'],
  providers:[]
})
export class MathProblemComponent implements OnChanges {

  @Input() problemNumber: number;
  problem:problem;
  problemString:string;
  isPositionQuestion:boolean = false;
  solution:number;

  constructor(
    private battleService: BattleService,
    private currentBattleStatusService:CurrentBattleStatusService,
    private global: GlobalService,
    private db: AngularFirestore
  ) {

  }

  ngOnChanges() {
    this.getProblem(this.problemNumber);
    this.setLogProblem();
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

  setLogProblem() {
    if(!this.isPositionQuestion){
      this.problemString = this.problem.left_side.toString() + this.problem.expression.toString() + this.problem.right_side.toString();
    }
    else{
      this.problemString = 'hundreds:'+this.problem.hundreds.toString()+ ',  tens:' + this.problem.tens.toString()+ ', ones:' + this.problem.hundreds.toString();
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
    const key = this.global.problemCount;
    if(!this.isPositionQuestion){
      this.problemString = this.problemString +'='+ answer.toString();
    }
    else{
      this.problemString = this.problemString + ' answered:' + answer.toString() + '  wanted:'+this.solution;
    }
    if(this.currentBattleStatusService.isAttacking.value){
      if(answer == this.solution){
        if(this.global.currentUserStudent != null){
          // Log the problem
          this.db.collection('Students').doc(`${this.global.currentUserStudent.value.refId}`)
          .collection('Logs').doc(`${this.global.currLogId}`).update({[key]:{problem:this.problemString, isCorrect:true}});
          //increment the number of problems finished and correct
          this.db.collection('Students').doc(`${this.global.currentUserStudent.value.refId}`)
          .update(
            {problemsFinished:this.global.currentUserStudent.value.problemsFinished+1, problemsCorrect:this.global.currentUserStudent.value.problemsCorrect+1}
          );
          this.global.currentUserStudent.next({...this.global.currentUserStudent.value, problemsFinished:this.global.currentUserStudent.value.problemsFinished+1, problemsCorrect:this.global.currentUserStudent.value.problemsCorrect+1});
        }
        this.battleService.setSolvedResult('Correct!');
        let monster = this.currentBattleStatusService.monster.value;
        monster.hp = monster.hp - 1;
        this.currentBattleStatusService.monster.next({...monster});

      }
      else{
        if(this.global.currentUserStudent != null){
          this.db.collection('Students').doc(`${this.global.currentUserStudent.value.refId}`)
          .collection('Logs').doc(`${this.global.currLogId}`).update({[key]:{problem:this.problemString, isCorrect:false}});
          this.db.collection('Students').doc(`${this.global.currentUserStudent.value.refId}`)
          .update(
            {problemsFinished:this.global.currentUserStudent.value.problemsFinished+1}
          );
          this.global.currentUserStudent.next({...this.global.currentUserStudent.value, problemsFinished:this.global.currentUserStudent.value.problemsFinished+1});
        }
        this.battleService.setSolvedResult('Wrong!');
      }
    }
    else{
      if(answer == this.solution){
        if(this.global.currentUserStudent != null){
          this.db.collection('Students').doc(`${this.global.currentUserStudent.value.refId}`)
          .collection('Logs').doc(`${this.global.currLogId}`).update({[key]:{problem:this.problemString, isCorrect:true}});
        }
        this.db.collection('Students').doc(`${this.global.currentUserStudent.value.refId}`)
          .update(
            {problemsFinished:this.global.currentUserStudent.value.problemsFinished+1, problemsCorrect:this.global.currentUserStudent.value.problemsCorrect+1}
          );
          this.global.currentUserStudent.next({...this.global.currentUserStudent.value, problemsFinished:this.global.currentUserStudent.value.problemsFinished+1, problemsCorrect:this.global.currentUserStudent.value.problemsCorrect+1});
        this.battleService.setSolvedResult('Correct!');
      }
      else{
        if(this.global.currentUserStudent != null){
          this.db.collection('Students').doc(`${this.global.currentUserStudent.value.refId}`)
          .collection('Logs').doc(`${this.global.currLogId}`).update({[key]:{problem:this.problemString, isCorrect:false}});
          this.db.collection('Students').doc(`${this.global.currentUserStudent.value.refId}`)
          .update(
            {problemsFinished:this.global.currentUserStudent.value.problemsFinished+1}
          );
          this.global.currentUserStudent.next({...this.global.currentUserStudent.value, problemsFinished:this.global.currentUserStudent.value.problemsFinished+1});
        }
        this.battleService.setSolvedResult('Wrong!');
        let user = this.currentBattleStatusService.user.value;
        user.hp = user.hp - 1;
        this.currentBattleStatusService.user.next({...user});
      }
    }

    this.global.problemCount += 1;


  }

}
