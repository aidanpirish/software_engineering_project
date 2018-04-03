import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Participant } from '../../../interfaces/participantINT.interface';
import { BattleService } from '../battle.service';
import { Reference } from '@firebase/storage-types';
import { Url } from 'url';
import { ParticipantService } from './participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit{

  @Input()
  isMirrored: boolean = false;
  
  @Input()
  isMonster: boolean = true;
  
  @Input()
  id:number;
  @Input()
  participant:Participant =
  {
    hp:4,
    name:'',
    picture:''
    
  };
  
  constructor() {
  }
  
  ngOnInit(): void {
  }
}
