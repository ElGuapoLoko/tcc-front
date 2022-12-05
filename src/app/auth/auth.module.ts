import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {  NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAuthModule, NbAuthService } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    AuthRoutingModule,
    NbLayoutModule,

    FormsModule,
    ReactiveFormsModule,

    NbCardModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,

    NbAuthModule,
  ],

  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],

  providers: [
    
  ]
})

export class AuthModule { }
