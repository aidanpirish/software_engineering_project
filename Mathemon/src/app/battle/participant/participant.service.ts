import { Injectable, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { participant } from '../../interfaces/participantINT.interface';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ParticipantService {

  @Input() id:number;
  @Input() type:string;

  monsterCollection:AngularFirestoreCollection<participant>;
  omonsters:Observable<participant[]>;
  monster: Subject<participant> = new Subject<participant>();

  userCollection:AngularFirestoreCollection<participant>;
  ousers:Observable<participant[]>;
  users: Subject<participant> = new Subject<participant>();

  

  constructor(private db: AngularFirestore) {    
  }

  getUserCollection(){
    //set up for user collection
  }


  getMonsterCollection() {
    this.monsterCollection =  this.db.collection('Monsters');
    this.omonsters =  this.monsterCollection.valueChanges();
    this.omonsters.subscribe(monsters => {
      this.setMonster(monsters,this.id);
      console.log(monsters)
    });
  }

  setMonster(monsters:participant[], id:number){
    this.monster.next(monsters[0]);
  }



}
