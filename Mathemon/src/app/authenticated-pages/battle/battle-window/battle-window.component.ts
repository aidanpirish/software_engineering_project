import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant/participant.service';
import { ActivatedRoute } from '@angular/router';
import { participant } from '../../../interfaces/participantINT.interface';
import { GlobalService } from '../../../global/global.service';
import { Teacher } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-battle-window',
  templateUrl: './battle-window.component.html',
  styleUrls: ['./battle-window.component.scss'],
  providers:[]
})
export class BattleWindowComponent implements OnInit {

  monster:participant;
  user:participant

  constructor(
    private participantService:ParticipantService,
    private route: ActivatedRoute,
    private global: GlobalService
  ) {

   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.participantService.setMonster(params.id);
      this.participantService.monster.subscribe(monster => {
        this.monster = monster;
      })
      this.global.currentUser.subscribe( (user:Teacher) => {
        this.user = {
          hp:user.hp,
          name:user.name.firstName + ' ' + user.name.lastName,
          picture:user.picture
        }
      });
    });
    
  }

}
