import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { AuthGuard } from './auth-guard.service';
import { BattleGroundComponent } from '../battle/battle-ground/battle-ground.component';
import { LoginService } from './login/login.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const authRoutes: Routes  = [
  {
    path:'home',
    component:HomePageComponent,
    canActivate:[AuthGuard],
    // children:[
    //   {path: '',
    //   canActivateChild:[AuthGuard],
    //   children: [
    //     {path:'battleground',component:BattleGroundComponent}
    //     ]
    //   }
    //   ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  declarations:[
    HomePageComponent
  ],
  exports: [
    RouterModule
  ],
  providers:[
  ]
})
export class AuthenticationRoutingModule { }
