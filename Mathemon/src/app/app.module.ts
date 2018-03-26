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
import { BattleGroundComponent } from './authenticated-pages/battle/battle-ground/battle-ground.component';
import { MovesetBoxComponent } from './authenticated-pages/battle/moveset-box/moveset-box.component';
import { MoveComponent } from './authenticated-pages/battle/move/move.component';
import { BattleWindowComponent } from './authenticated-pages/battle/battle-window/battle-window.component';
import { HealthBarComponent } from './authenticated-pages/battle/health-bar/health-bar.component';
import { AuthGuard } from './authenticated-pages/auth-guard.service';
import { AuthenticationRoutingModule } from './authenticated-pages/authentication-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BattleGroundComponent } from './battle/battle-ground/battle-ground.component';
import { MovesetBoxComponent } from './battle/moveset-box/moveset-box.component';
import { MoveComponent } from './battle/move/move.component';
import { BattleWindowComponent } from './battle/battle-window/battle-window.component';
import { HealthBarComponent } from './battle/health-bar/health-bar.component';
import { MathProblemComponent } from './battle/math-problem/math-problem.component';
import { BattleService } from './battle/battle.service';
import { SignupService } from './signup/signup.service';
import { LevelSelectComponent } from './level-select/level-select.component';

const appRoutes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'battleground',component:BattleGroundComponent},
  {path:'level', component:LevelSelectComponent},
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
    PageNotFoundComponent,
    BattleGroundComponent,
    MovesetBoxComponent,
    MoveComponent,
    BattleWindowComponent,
    HealthBarComponent,
    MathProblemComponent,
    LevelSelectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    LoginRoutingModule,
    AuthenticationRoutingModule,
    AppRoutingModule
  ],
  providers: [BattleService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
