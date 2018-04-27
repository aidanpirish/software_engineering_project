import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SeeLogsService } from '../see-logs.service';
import { Student } from '../../../interfaces/user.interface';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students:Student[];
  @Output() studentClicked = new EventEmitter()
  constructor(private SeeLogs_Service:SeeLogsService) { }

  ngOnInit() {
    this.students = this.SeeLogs_Service.teachersStudent;
  }

  emitStudentClicked(studentId:string){
    this.studentClicked.emit(studentId);
  }

}
