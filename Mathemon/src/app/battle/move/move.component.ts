import { Component, OnInit, Input } from '@angular/core';
import { problem } from '../../interfaces/problem.interface';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})
export class MoveComponent implements OnInit {

  @Input() problem: problem;

  constructor() { }

  ngOnInit() {
  }

}
