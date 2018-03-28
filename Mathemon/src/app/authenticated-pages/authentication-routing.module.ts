import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth-guard.service';
import { BattleGroundComponent } from './battle/battle-ground/battle-ground.component';
import { LoginService } from '../login/login.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LevelSelectComponent } from './level-select/level-select.component';

const authRoutes: Routes  = [
  {
    path:'home',
    component:HomePageComponent,
    canActivate:[AuthGuard],
    // children:[
    //   {path: '',
    //   canActivateChild:[AuthGuard],
    //   children: [
    //     {path:'battleground',component:BattleGroundComponent},
    //     {path:'level-select',component:LevelSelectComponent}
    //     ]
    //   }
    //   ]
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
  {path:'level-select',component:LevelSelectComponent}

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
