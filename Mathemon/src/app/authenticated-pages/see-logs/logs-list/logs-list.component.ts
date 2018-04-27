import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { SeeLogsService } from '../see-logs.service';


@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.scss']
})
export class LogsListComponent implements OnInit {

  logList:any[];
  @Output()logsClicked = new EventEmitter()
  constructor(private SeeLogs_Service:SeeLogsService) { }

  ngOnInit() {
    this.logList = this.SeeLogs_Service.studentsLogs;
  }

  emitLogClicked(logId:string){
    this.logsClicked.emit(logId);
  }

}
