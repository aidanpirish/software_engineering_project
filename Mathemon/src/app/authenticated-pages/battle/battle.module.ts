import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleGroundComponent } from './battle-ground/battle-ground.component';
import { MovesetBoxComponent } from './moveset-box/moveset-box.component';
import { MoveComponent } from './move/move.component';
import { BattleWindowComponent } from './battle-window/battle-window.component';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { MathProblemComponent } from './math-problem/math-problem.component';
import { ParticipantComponent } from './participant/participant.component';
import { ParticipantService } from './participant/participant.service';
import { BattleService } from './battle.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BattleGroundComponent,
    MovesetBoxComponent,
    MoveComponent,
    BattleWindowComponent,
    HealthBarComponent,
    MathProblemComponent,
    ParticipantComponent
  ],
  providers:[ParticipantService]
})
export class BattleModule { }
