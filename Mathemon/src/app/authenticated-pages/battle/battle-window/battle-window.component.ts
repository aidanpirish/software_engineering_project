import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant/participant.service';
import { ActivatedRoute } from '@angular/router';
import { Participant } from '../../../interfaces/participantINT.interface';
import { GlobalService } from '../../../global/global.service';
import { Teacher } from '../../../interfaces/user.interface';
import { CurrentBattleStatusService } from '../current-battle-status.service';

@Component({
  selector: 'app-battle-window',
  templateUrl: './battle-window.component.html',
  styleUrls: ['./battle-window.component.scss'],
  providers:[]
})
export class BattleWindowComponent implements OnInit {

  monster:Participant;
  user:Participant;

  constructor(
    private participantService:ParticipantService,
    private route: ActivatedRoute,
    private global: GlobalService,
    private currentBattleStatusService:CurrentBattleStatusService
  ) {

   }

  ngOnInit() {
    this.currentBattleStatusService.monster.subscribe(value => this.monster = value);
    this.currentBattleStatusService.user.subscribe(value => this.user = value);
    this.route.params.subscribe(params => {
      this.participantService.setMonster(params.id);
      this.currentBattleStatusService.currentLevel = params.id;
      this.participantService.monster.subscribe(monster => {
        this.currentBattleStatusService.monster.next(monster);
      })
      if(this.global.currentUserTeacher.value != null){
      this.global.currentUserTeacher.subscribe(user => {
        this.currentBattleStatusService.user.next({
          hp:4,
          name:user.name.firstName + ' ' + user.name.lastName,
          picture:user.picture
        })
      });
    }
    else{
      this.global.currentUserStudent.subscribe(user => {
        this.currentBattleStatusService.user.next({
          hp:4,
          name:user.name.firstName + ' ' + user.name.lastName,
          picture:user.picture
        })
      });
    }
    });

  }

}
