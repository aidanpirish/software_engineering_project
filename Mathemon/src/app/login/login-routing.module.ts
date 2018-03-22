import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './login.component';
import { LoginService } from './login.service';
import { AuthGuard } from '../authenticated-pages/auth-guard.service';
 
const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    LoginService
  ]
})
export class LoginRoutingModule {}