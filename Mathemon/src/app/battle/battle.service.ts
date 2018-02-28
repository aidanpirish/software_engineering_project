import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { problem } from '../interfaces/problem.interface';

@Injectable()
export class BattleService {

  problemCollection: AngularFirestoreCollection<problem>;
  problems:Observable<problem[]>

  constructor(private db: AngularFirestore) { 
    this.problemCollection = this.db.collection('Questions');
    this.problems = this.problemCollection.valueChanges();
  }

}
