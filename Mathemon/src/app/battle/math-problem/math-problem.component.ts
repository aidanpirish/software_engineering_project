import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.scss']
})
export class MathProblemComponent implements OnInit {

  @Input() leftSide: number
  @Input() rightSide: number
  @Input() expression: number

  constructor() { }

  ngOnInit() {
  }

}
