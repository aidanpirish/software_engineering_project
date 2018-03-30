import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { problem } from '../../interfaces/problem.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BattleService {

  problemCollection: AngularFirestoreCollection<problem>;
  problems:Observable<problem[]>
  problem1:problem;
  problem2:problem;
  problem3:problem;
  problem4:problem;
  solution:string;
  solvedResult:BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private db: AngularFirestore) { 
    this.problemCollection = this.db.collection('Questions');
    this.problems = this.problemCollection.valueChanges();
    this.problems.subscribe(data => 
      this.assignProblems(data)
    );
    this.solvedResult.subscribe(result => this.solution = result);
  }

  assignProblems(problems:problem[]):void {
    this.problem1 = problems[0];
    this.problem2 = problems[1];
    this.problem3 = problems[2];
    this.problem4 = problems[3];
  }

  setSolvedResult(result:string):void {
    this.solvedResult.next(result);
  }
}
