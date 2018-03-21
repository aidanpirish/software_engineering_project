import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { PageNotFoundComponent } from './authentication/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    // {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'', redirectTo:'/login', pathMatch: 'full' },
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