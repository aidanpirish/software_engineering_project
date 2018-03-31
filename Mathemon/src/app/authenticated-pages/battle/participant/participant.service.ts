import { Injectable, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { participant } from '../../../interfaces/participantINT.interface';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ParticipantService {

  @Input() id:number;
  @Input() type:string;

  monsterCollection:AngularFirestoreCollection<participant>;
  omonsters:Observable<participant[]>;
  monsters:participant[];
  monster: BehaviorSubject<participant> = new BehaviorSubject<participant>(null);

  userCollection:AngularFirestoreCollection<participant>;
  ousers:Observable<participant[]>;
  users:participant[];
  user: BehaviorSubject<participant> = new BehaviorSubject<participant>(null);

  

  constructor(private db: AngularFirestore) {
    this.getMonsterCollection();
  }


  /*
  *
  * User and Monster collection run when the app is created, so just call on
  * set monster and set user to specify which one you want 
  * 
  * */

  getMonsterCollection() {
    this.monsterCollection =  this.db.collection('Monsters');
    this.omonsters =  this.monsterCollection.valueChanges();
    this.omonsters.subscribe(monsters => {
      this.monsters = monsters;
    });
  }

  setMonster(id:number){
    //probably needs to be tweaked but can be called anywhere participant service has been injected to the constructor
    //DO NOT PROVIDE THE SERVICE ANYWHERE ELSE BESIDES APP-MODULE
    this.monster.next(this.monsters[id]);
  }



}
