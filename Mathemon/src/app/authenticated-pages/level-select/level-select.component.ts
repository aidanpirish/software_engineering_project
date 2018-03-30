import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../battle/participant/participant.service';

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.scss'],
  providers:[]
})
export class LevelSelectComponent implements OnInit {

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  }

}
