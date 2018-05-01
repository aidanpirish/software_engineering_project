import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { SeeLogsService } from '../see-logs.service';


@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.scss']
})
export class LogsListComponent implements OnInit {

  logList:any[];
  @Output()logClicked = new EventEmitter()
  constructor(private SeeLogs_Service:SeeLogsService) { }

  ngOnInit() {
    this.SeeLogs_Service.studentsLogs.subscribe(logs => {
      this.logList = logs;
    });
  }

  emitLogClicked(logId:string){
    console.log(logId);
    this.logClicked.emit(logId);
  }

}
