import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../global/global.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isTeacher:boolean = false;

  constructor(
    private router:Router,
    private global: GlobalService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if(params.type == 'teacher'){
          this.isTeacher = true
        }
    });
  }

}
