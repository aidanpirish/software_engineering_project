import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { GlobalService } from '../../global/global.service';
import { Observable } from 'rxjs/Observable';
import { problem } from '../../interfaces/problem.interface';

@Injectable()
export class ProblemEditService {

  // This will be the array that holds the problems
  questions: Observable<problem[]>;

  // this is the question collection for the current teacher
  questionCollection: any;

  constructor(
    private db: AngularFirestore,
    private global: GlobalService
  ) {
    const teacher = this.global.currentUserTeacher;
    this.questionCollection = this.db.collection('Teachers').doc(`${teacher.value.refId}`).collection('Questions');
    this.questions = this.questionCollection.snapshotChanges().map(actions => {
      return actions.map(d => {
        const question = d.payload.doc.data() as problem;
        const id = d.payload.doc.id;
        return { id, ...question };
      });
    });

  }

  // FOR EDIT QUESTION AND DELETE QUESTION THE QUESTION THAT BEING HANDED IN HAD ID WHICH IS THE DOC REF STRING AND THE REST OF THE FIELDS ARE THE CONTENTS OF THE DOC

  //edits the given question
  editQuestion(question: any) {
    /**
     * this method needs to call on the specific question document and update the appropriate fields. See avatar selection for semi-example code
     */
    //this.questionCollection
  }

  //adds question to the database
  addQuestion(problem: problem) {
    /**
     * this method needs to PUT a question into the list. Look up angularfire2 documentation on adding a new document (questions are documents)
     */
    //this.db.questionCollection()
  }

  //deletes question from datadatabase
  deleteQuestion(question: any) {
    /**
     * this needs to remove a question from the database. look up angularfire2 documentation on removing a document (again, questions are documents)
     */
    //this.db.questionCollection()
  }



}
