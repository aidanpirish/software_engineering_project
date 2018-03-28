import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { participant } from '../../interfaces/participantINT.interface';
import { BattleService } from '../battle.service';
import { Reference } from '@firebase/storage-types';
import { Url } from 'url';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent {
  @Input()
  id:number;
  @Input()
  participant:participant =
    {
      hp:4,
      name:'',
      picture:''

    };

  constructor() {

   }

}
