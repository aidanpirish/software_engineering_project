import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './teacher-login/login.component';
import { LoginService } from './login.service';
import { AuthGuard } from '../authenticated-pages/auth-guard.service';
import { StudentLoginComponent } from './student-login/student-login.component';
 
const loginRoutes: Routes = [
  { path: 'teacher-login', component: LoginComponent },
  { path: 'student-login', component: StudentLoginComponent },
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