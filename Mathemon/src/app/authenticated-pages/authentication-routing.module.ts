import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth-guard.service';
import { BattleGroundComponent } from './battle/battle-ground/battle-ground.component';
import { LoginService } from '../login/login.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LevelSelectComponent } from './level-select/level-select.component';
import { CommonModule } from '@angular/common';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { AvatarSelectionComponent } from './avatar-selection/avatar-selection.component';

//these routes are for all pages that need a user to be logged in in order to access
const authRoutes: Routes  = [
  {
    path:'home/:type',
    component:HomePageComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'battleground',
    canActivate:[AuthGuard],
    children:[
      {
        path:':id',
        component:BattleGroundComponent
      }
    ]
  },
  {
  path:'level-select',
  canActivate:[AuthGuard],
  component:LevelSelectComponent
  },
  {
  path:'student-signup',
  canActivate:[AuthGuard],
  component:StudentSignupComponent
  },
  {
  path:'signup-success',
  canActivate:[AuthGuard],
  component:SignupSuccessComponent
  },
  {
  path:'avatar-selection',
  canActivate:[AuthGuard],
  component:AvatarSelectionComponent
  },

]


@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
    CommonModule
  ],
  declarations:[
    HomePageComponent,
    StudentSignupComponent,
    SignupSuccessComponent,
    AvatarSelectionComponent
  ],
  exports: [
    RouterModule
  ],
  providers:[
  ]
})
export class AuthenticationRoutingModule { }
