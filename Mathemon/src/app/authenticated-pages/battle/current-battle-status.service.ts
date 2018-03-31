import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GlobalService } from '../../global/global.service';
import { User, Teacher, Student } from '../../interfaces/user.interface';
import { Participant } from '../../interfaces/participantINT.interface';
import { ParticipantService } from './participant/participant.service';

@Injectable()
export class CurrentBattleStatusService {

  //for user setup at beginning of round
  @Input()
  userInput: Participant;
  user: BehaviorSubject<Participant> = new BehaviorSubject<Participant>(null);

  //for monster setup at beginning of round
  @Input()
  monsterInput:Participant;
  monster:BehaviorSubject<Participant> = new BehaviorSubject<Participant>(null);

  //true is attack, false is defend
  isAttacking:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  //end the battle
  battleOver:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  //if there is a winner, this is who it was
  winner:BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private global: GlobalService, private participantService:ParticipantService) {

  }

  switchAttackOrDefense(){
    if(this.isAttacking.value == true){
      this.isAttacking.next(false);
    }
    else{
      this.isAttacking.next(true);
    }
  }

  checkIfBattleOver(){
    if(this.monster.value.hp == 0 || this.user.value.hp == 0){
      this.battleOver.next(true);
      if(this.monster.value.hp == 0){
        this.winner.next(this.user.value.name);
      }
      else{
        this.winner.next(this.monster.value.name);
      }
    }
  }

}
