import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-battle-ground',
  templateUrl: './battle-ground.component.html',
  styleUrls: ['./battle-ground.component.scss']
})
export class BattleGroundComponent implements OnInit {
  
  move1
  move2
  move3
  move4
  constructor(db: AngularFirestore) { }

  ngOnInit() {
  }

}
