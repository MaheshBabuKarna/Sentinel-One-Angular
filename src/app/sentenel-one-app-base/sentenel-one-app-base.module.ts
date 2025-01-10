import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SentenelOneAppBaseComponent } from './sentenel-one-app-base.component';
import { LoginComponent } from './login/login.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SentenelOneAppBaseComponent,
    LoginComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DashboardsComponent,
    WelcomeComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    SentenelOneAppBaseComponent
  ]
})
export class SentenelOneAppBaseModule { }