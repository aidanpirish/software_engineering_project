import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BattleGroundComponent } from './battle/battle-ground/battle-ground.component';
import { MovesetBoxComponent } from './battle/moveset-box/moveset-box.component';
import { MoveComponent } from './battle/move/move.component';
import { BattleWindowComponent } from './battle/battle-window/battle-window.component';
import { HealthBarComponent } from './battle/health-bar/health-bar.component';
import { MathProblemComponent } from './battle/math-problem/math-problem.component';
import { BattleService } from './battle/battle.service';
import { SignupService } from './signup/signup.service';
import { ParticipantComponent } from './battle/participant/participant.component';

const appRoutes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'battleground',component:BattleGroundComponent},
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  {path:'**',component:PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    PageNotFoundComponent,
    BattleGroundComponent,
    MovesetBoxComponent,
    MoveComponent,
    BattleWindowComponent,
    HealthBarComponent,
    MathProblemComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [BattleService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
