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
  public teacher = this.global.currentUserTeacher;

  constructor(
    private db: AngularFirestore,
    private global: GlobalService
  ) {
    console.log("In the constructor");
    //this.questionCollection = this.db.collection('Teachers').doc(`${teacher.value.refId}`).collection('Questions');
    this.getQuestions();

  }

  // FOR EDIT QUESTION AND DELETE QUESTION THE QUESTION THAT BEING HANDED IN HAD ID WHICH IS THE DOC REF STRING AND THE REST OF THE FIELDS ARE THE CONTENTS OF THE DOC

  //edits the given question
  editQuestion(question: any) {
    /**
     * this method needs to call on the specific question document and update the appropriate fields. See avatar selection for semi-example code
     */
    //this.questionCollection
    if (question.expression == 'ones' || question.expression == 'tens' || question.expression == 'hundreds') {
      this.db.collection("Teachers").doc(`${this.teacher.value.refId}`).collection("Questions").doc(`${question.id}`)
      .update({ ones: question.ones, tens: question.tens, hundreds: question.hundreds, expression: question.expression, diff: question.diff }).then(function() {
        console.log("Document successfully updated!");
      }).catch(function(error) {
        console.error("Error updating document: ", error); 
      });
    }
    else {
      this.db.collection("Teachers").doc(`${this.teacher.value.refId}`).collection("Questions").doc(`${question.id}`)
      .update({ left_side: question.left_side, right_side: question.right_side, expression: question.expression, diff: question.diff }).then(function() {
        console.log("Document successfully updated!");
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    }
  }

  //adds question to the database
  addQuestion(problem: problem) {
    /**
     * this method needs to PUT a question into the list. Look up angularfire2 documentation on adding a new document (questions are documents)
     */
    //this.db.questionCollection()
    if (problem.expression == 'ones' || problem.expression == 'tens' || problem.expression == 'hundreds') {
      this.db.collection("Teachers").doc(`${this.teacher.value.refId}`).collection("Questions")
      .add({ ones: problem.ones, tens: problem.tens, hundreds: problem.hundreds, expression: problem.expression, diff: problem.diff }).then(function() {
        console.log("Document successfully added!");
      }).catch(function(error) {
        console.error("Error updating document: ", error); 
      });
    }
    else {
      this.db.collection("Teachers").doc(`${this.teacher.value.refId}`).collection("Questions")
      .add({ left_side: problem.left_side, right_side: problem.right_side, expression: problem.expression, diff: problem.diff }).then(function() {
        console.log("Document successfully added!");
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    }
  }

  //deletes question from datadatabase
  deleteQuestion(question: any) {
    /**
     * this needs to remove a question from the database. look up angularfire2 documentation on removing a document (again, questions are documents)
     */
    this.db.collection("Teachers").doc(`${this.teacher.value.refId}`).collection("Questions").doc(`${question.id}`).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }

getQuestions() {
  this.questions = this.db.collection('Teachers').doc(`${this.teacher.value.refId}`).collection('Questions').snapshotChanges().map(actions => {
    return actions.map(d => {
      const question = d.payload.doc.data() as problem;
      const id = d.payload.doc.id;
      return { id, ...question };
    });
  });
}

}
