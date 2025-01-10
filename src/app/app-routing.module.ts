import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenelOneAppBaseComponent } from './sentenel-one-app-base/sentenel-one-app-base.component';
import { LoginComponent } from './sentenel-one-app-base/login/login.component';
import { DashboardsComponent } from './sentenel-one-app-base/dashboards/dashboards.component';
import { authGuard } from './core/guards/auth.guard';
import { WelcomeComponent } from './sentenel-one-app-base/welcome/welcome.component';
import { SignupComponent } from './sentenel-one-app-base/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: SentenelOneAppBaseComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'dashboard', component: DashboardsComponent, canActivate: [authGuard] },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }