import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { problem } from '../../interfaces/problem.interface';
import { BattleService } from '../battle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-battle-ground',
  templateUrl: './battle-ground.component.html',
  styleUrls: ['./battle-ground.component.scss'],
  providers:[BattleService]
})
export class BattleGroundComponent implements OnInit {
  
  problemNumber:any;

  solutionStatus:string = null;

  constructor(private battleService: BattleService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.problemNumber = params.problemNumber;
    });
    this.battleService.solvedResult.subscribe(result => this.solutionStatus = result);
  }
  
  ngOnInit() {

  }

  resetSolutionStatus():void {
    this.battleService.setSolvedResult(null);
  }
}
