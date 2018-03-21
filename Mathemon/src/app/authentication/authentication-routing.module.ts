import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { AuthGuardService } from './auth-guard.service';
import { BattleGroundComponent } from '../battle/battle-ground/battle-ground.component';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from './login/login.service';

const loginRoutes: Routes  = [
  {
    path:'login',
    component:LoginComponent,
    // canActivate:[AuthGuardService],
    children:[
      {path: '',
      children: [
        {path:'home', component:HomePageComponent},
        {path:'battleground',component:BattleGroundComponent}
        ]
      }
      ]
  },
  {
    path:'signup',
    component:SignupComponent,
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers:[
    LoginService
  ]
})
export class AuthenticationRoutingModule { }
