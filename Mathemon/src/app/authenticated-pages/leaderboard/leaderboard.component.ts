import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { GlobalService } from '../../global/global.service';
import { Student } from '../../interfaces/user.interface';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  students:Student[]

  constructor(private db:AngularFirestore, private global:GlobalService) {
    this.db.collection('Teachers').doc(`${this.global.currentUserStudent.value.teacherId}`)
   }

  ngOnInit() {
  }

}
