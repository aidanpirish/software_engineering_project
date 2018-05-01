import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { GlobalService } from '../../global/global.service';
import { Student } from '../../interfaces/user.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  studentCollection:AngularFirestoreCollection<Student>;
  oStudents:Observable<Student[]>;
  students:Student[];

  constructor(private db:AngularFirestore, private global:GlobalService) {
  }

  ngOnInit() {
    console.log("teacherID", this.global.currentUserStudent.value.teacherId);
    this.studentCollection = this.db.collection('Students', ref => ref.where('teacherId', '==', this.global.currentUserStudent.value.teacherId))
    this.oStudents = this.studentCollection.valueChanges();
    this.oStudents.subscribe(students => {
      this.students = students;
      //Organize leaderboard
      this.organizeLeaderboard();
    });
  }

  private organizeLeaderboard(){
    this.students.sort((a, b) => {
      //sort by highest level
      if(a.highestLevel > b.highestLevel){
        return -1;
      }
      else if(a.highestLevel < b.highestLevel){
        return 1;
      }

      //if the level is the same
      if((a.problemsCorrect/a.problemsFinished) > (b.problemsCorrect/b.problemsFinished)){
        return -1;
      }
      else{
        return 1;
      }


    });
    console.log(this.students);
  }



}
