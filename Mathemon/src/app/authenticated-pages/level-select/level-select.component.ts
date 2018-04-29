import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../battle/participant/participant.service';
import { GlobalService } from '../../global/global.service';

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.scss'],
  providers:[]
})
export class LevelSelectComponent implements OnInit{

  highestLevel:number = 10000;

  constructor(private participantService: ParticipantService, private global:GlobalService) {
  }

  ngOnInit(){
    if(this.global.currentUserStudent.value != null){
      this.highestLevel = this.global.currentUserStudent.value.highestLevel;
    }
  }


}
