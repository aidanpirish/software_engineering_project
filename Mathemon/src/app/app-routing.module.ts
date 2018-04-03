import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/teacher-login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {path:'signup', component:SignupComponent},
    {path:'', redirectTo:'/student-login', pathMatch: 'full' },
    {path:'**', component:PageNotFoundComponent}
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}