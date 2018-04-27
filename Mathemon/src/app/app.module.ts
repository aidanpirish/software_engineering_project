import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './authenticated-pages/home-page/home-page.component';
import { AuthGuard } from './authenticated-pages/auth-guard.service';
import { AuthenticationRoutingModule } from './authenticated-pages/authentication-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/teacher-login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupService } from './signup/signup.service';
import { LevelSelectComponent } from './authenticated-pages/level-select/level-select.component';
import { FormsModule } from '@angular/forms';
import { ParticipantComponent } from './authenticated-pages/battle/participant/participant.component';
import { ParticipantService } from './authenticated-pages/battle/participant/participant.service';
import { GlobalService } from './global/global.service';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { BattleModule } from './authenticated-pages/battle/battle.module';
import { StudentSignupComponent } from './authenticated-pages/student-signup/student-signup.component';
import { LeaderboardComponent } from './authenticated-pages/leaderboard/leaderboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentLoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    LevelSelectComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    BattleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    LoginRoutingModule,
    AuthenticationRoutingModule,
    AppRoutingModule
  ],
  providers: [ SignupService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
