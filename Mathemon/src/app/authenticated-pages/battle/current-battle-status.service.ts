import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrentBattleStatusService {

  userHealth:number;
  monsterHealth:number;

  //true is attack, false is defend
  isAttacking:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

}
