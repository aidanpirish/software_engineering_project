import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { participant } from '../../interfaces/participantINT.interface';
import { BattleService } from '../battle.service';
import { Reference } from '@firebase/storage-types';
import { Url } from 'url';
import { ParticipantService } from './participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],

  providers:[ParticipantService]
})
export class ParticipantComponent {
  @Input()
  id:number;
  participant:participant =
    {
      hp:4,
      name:'',
      picture:''

    };

  constructor(private participantService: ParticipantService) {
      this.participantService.monster.subscribe(monster => {             
        this.participant = monster
      });

   }

}
