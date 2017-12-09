import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FirstPassRateComponent} from './claims/firstpassrate/firstpassrate.component';
import {TrendingInventoryComponent} from './claims/trendinginventory/trendinginventory.component';
import {AuthGuard} from './auth/guards/auth.guards';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import { MemberComponent } from './member/member.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'home', 
    component: HomeComponent, 
    canActivate: [AuthGuard],
    children: [
                {
                  path: '',
                  component: DashboardComponent
                },
                {
                  path: 'claims/firstpassrate',
                  component: FirstPassRateComponent,
                },
                {
                  path: 'claims/trendinginventory',
                  component: TrendingInventoryComponent
                },
                {
                  path: 'member',
                  component: MemberComponent
                },
                {
                  path: 'settings',
                  component: SettingsComponent
                }
  ]
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
