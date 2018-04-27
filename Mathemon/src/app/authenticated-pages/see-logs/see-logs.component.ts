import { Component, OnInit } from '@angular/core';
import { SeeLogsService } from './see-logs.service';

@Component({
  selector: 'app-see-logs',
  templateUrl: './see-logs.component.html',
  styleUrls: ['./see-logs.component.scss'],
  providers: [SeeLogsService]
})
export class SeeLogsComponent implements OnInit {

  studentSelected:boolean;
  logSelected:boolean;

  constructor(private SeeLogs_Service:SeeLogsService) {
  }

  ngOnInit() {
    this.SeeLogs_Service.callStudents();

  }

  catchStudent(studentId){
    this.SeeLogs_Service.getStudetnLogs(studentId);
  }



}
