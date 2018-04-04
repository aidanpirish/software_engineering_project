import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global/global.service';
import { Avatar } from '../../interfaces/avatar.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar-selection',
  templateUrl: './avatar-selection.component.html',
  styleUrls: ['./avatar-selection.component.scss']
})
export class AvatarSelectionComponent implements OnInit {

  avatars:Avatar[];

  constructor(private global: GlobalService, private router: Router) {
   }

  ngOnInit() {
    // this.global.doSomething();
    this.global.getAvatarList();
    this.global.oavatars.subscribe(avatars => this.avatars = avatars);
  }

  choosePicture(avatar:Avatar){
    this.global.currentUser.value.picture = avatar.picture;
    this.router.navigate(['/home']);
  }


}
