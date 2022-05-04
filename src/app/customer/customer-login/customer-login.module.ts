import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    LoginSignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LoginSignupComponent,
    ForgotPasswordComponent
  ]
})
export class CustomerLoginModule { }
