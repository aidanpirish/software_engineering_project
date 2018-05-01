import { Component, OnInit } from '@angular/core';
import { SeeLogsService } from '../see-logs.service';

@Component({
  selector: 'app-view-respones',
  templateUrl: './view-respones.component.html',
  styleUrls: ['./view-respones.component.scss']
})
export class ViewResponesComponent implements OnInit {

  log:any;
  constructor(private SeeLogs_Service:SeeLogsService) { }

  ngOnInit() {
    this.SeeLogs_Service.studentLogB.subscribe(log => {
      this.log = log;
    })
  }

}
