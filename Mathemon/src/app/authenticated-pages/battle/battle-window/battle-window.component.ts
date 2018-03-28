import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant/participant.service';
import { ActivatedRoute } from '@angular/router';
import { participant } from '../../interfaces/participantINT.interface';

@Component({
  selector: 'app-battle-window',
  templateUrl: './battle-window.component.html',
  styleUrls: ['./battle-window.component.scss']
})
export class BattleWindowComponent implements OnInit {

  monster:participant;

  constructor(
    private participantService:ParticipantService,
    private route: ActivatedRoute
  ) {
    this.participantService.monster.subscribe(monster => {
      this.monster = monster;
    })
    this.route.params.subscribe(params => {
      this.participantService.setMonster(params.problemNumber);
    });
   }

  ngOnInit() {
  }

}
