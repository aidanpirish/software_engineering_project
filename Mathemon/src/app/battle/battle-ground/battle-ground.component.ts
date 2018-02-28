import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { problem } from '../../interfaces/problem.interface';

@Component({
  selector: 'app-battle-ground',
  templateUrl: './battle-ground.component.html',
  styleUrls: ['./battle-ground.component.scss']
})
export class BattleGroundComponent implements OnInit {
  

  constructor() {
  }
  
  ngOnInit() {

  }

}
