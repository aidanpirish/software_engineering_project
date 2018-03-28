import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { problem } from '../../interfaces/problem.interface';
import { BattleService } from '../battle.service';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'app-battle-ground',
  templateUrl: './battle-ground.component.html',
  styleUrls: ['./battle-ground.component.scss'],
  providers:[BattleService]
})
export class BattleGroundComponent implements OnInit {

  solutionStatus:string = null;

  constructor(
    private battleService: BattleService
  ) {
    this.battleService.solvedResult.subscribe(result => this.solutionStatus = result);
  }
  
  ngOnInit() {

  }

  resetSolutionStatus():void {
    this.battleService.setSolvedResult(null);
  }
}
