import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { problem } from '../../interfaces/problem.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BattleService {

  //database variables
  problemCollection: AngularFirestoreCollection<problem>;
  problemsO:Observable<problem[]>
  //problem type arrays
  level1Problems: problem[] = [];
  level2Problems: problem[] = [];
  level3Problems: problem[] = [];

  //problem for each possible move
  problem1:BehaviorSubject<problem> = new BehaviorSubject<problem>(null);
  problem2:BehaviorSubject<problem> = new BehaviorSubject<problem>(null);
  problem3:BehaviorSubject<problem> = new BehaviorSubject<problem>(null);
  problem4:BehaviorSubject<problem> = new BehaviorSubject<problem>(null);

  //solution for those problems
  problem1Solution:BehaviorSubject<number> = new BehaviorSubject<number>(null);
  problem2Solution:BehaviorSubject<number> = new BehaviorSubject<number>(null);
  problem3Solution:BehaviorSubject<number> = new BehaviorSubject<number>(null);
  problem4Solution:BehaviorSubject<number> = new BehaviorSubject<number>(null);
  
  //solution result for after an answer is submitted
  solvedResult:BehaviorSubject<string> = new BehaviorSubject<string>(null);

  //get problem information from the database when service is constructed so it is cached for the whole battle
  constructor(private db: AngularFirestore) { 
    this.problemCollection = this.db.collection('Questions');
    this.problemsO = this.problemCollection.valueChanges();
    this.problemsO.subscribe(data => {
      this.generateProblemGroups(data);
      this.assignProblems();
      }
    );
  }

  //separate problems into their difficulty levels
  private generateProblemGroups(problems:problem[]){
    for(let problem of problems){
      switch(problem.diff){
        case 1:
          this.level1Problems = [...this.level1Problems, problem];
          continue;
        case 2:
          this.level2Problems = [...this.level2Problems, problem];
          continue;
        case 3:
          this.level3Problems = [...this.level3Problems, problem];
          continue;
        default:
          this.level1Problems = [...this.level1Problems, problem];
          continue;
      }
    }
  }

  //pick a random problem for each possible move
  private pickRandomProblem(problemGroup: problem[], problemToBeAssigned:BehaviorSubject<problem>){
    let randomProblem = Math.floor(Math.random() * Math.floor(problemGroup.length));
    problemToBeAssigned.next(problemGroup[randomProblem]);
    if(problemToBeAssigned === this.problem1){
      this.findSolution(this.problem1.value, this.problem1Solution);
    }
    else if(problemToBeAssigned === this.problem2){
      this.findSolution(this.problem2.value, this.problem2Solution);
    }
    else if(problemToBeAssigned === this.problem3){
      this.findSolution(this.problem3.value, this.problem3Solution);
    }
    else if(problemToBeAssigned === this.problem4){
      this.findSolution(this.problem4.value, this.problem4Solution);
    }
  }

  //generate solution for each problem
  private findSolution(problem:problem, solution: BehaviorSubject<number>) {
    var leftSide:number = problem.left_side;
    var rightSide:number  = problem.right_side;
    switch(problem.expression) {
      case '+': {
        solution.next(leftSide + rightSide);
        break;
      }
      case '-': {
        solution.next(leftSide - rightSide);
        break;
      }
      case 'hundreds': {
        solution.next(problem.hundreds);
        break;
      }
      case 'ones': {
        solution.next(problem.ones);
        break;
      }
      case 'tens': {
        solution.next(problem.tens);
        break;
      }
    }
  }

  //assign random problems to each possible move
  private assignProblems():void {
    this.pickRandomProblem(this.level1Problems, this.problem1);
    this.pickRandomProblem(this.level2Problems, this.problem2);
    this.pickRandomProblem(this.level3Problems, this.problem3);
    this.pickRandomProblem(this.level1Problems, this.problem4);
    
  }

  //set answer for if student was right or wrong. string value comes from math-problem component
  setSolvedResult(result:string):void {
    this.solvedResult.next(result);
  }

  //clear out data and set up problems for next move
  resetProblems():void{
    this.assignProblems();
    this.setSolvedResult(null);
  }
}
