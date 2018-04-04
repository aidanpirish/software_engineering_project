import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { problem } from '../../../interfaces/problem.interface';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})
export class MoveComponent implements OnInit {

  @Input() difficulty: string;
  @Input() move: string;
  @Input() type: string;

  @Input() problemNumber: number;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitClick(){
    this.change.emit(this.problemNumber)
  }
}
