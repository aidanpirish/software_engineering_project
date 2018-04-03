import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { problem } from '../../../interfaces/problem.interface';
import { BattleService } from '../battle.service';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../participant/participant.service';
import { CurrentBattleStatusService } from '../current-battle-status.service';

@Component({
  selector: 'app-battle-ground',
  templateUrl: './battle-ground.component.html',
  styleUrls: ['./battle-ground.component.scss'],
  providers:[CurrentBattleStatusService]
})
export class BattleGroundComponent implements OnInit {

  solutionStatus:string = null;
  battleOver:boolean;
  winner:string = null;

  constructor(
    private battleService: BattleService,
    private currentBattleStatusService: CurrentBattleStatusService
  ) {
    this.battleService.solvedResult.subscribe(result => this.solutionStatus = result);
    this.currentBattleStatusService.battleOver.subscribe(value => this.battleOver = value);
    this.currentBattleStatusService.winner.subscribe(value => this.winner  = value);
  }
  
  ngOnInit() {

  }

  resetSolutionStatus():void {
    this.battleService.resetProblems();
    this.currentBattleStatusService.switchAttackOrDefense();
    this.currentBattleStatusService.checkIfBattleOver();
  }
}
