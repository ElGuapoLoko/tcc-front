import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NbAuthComponent } from '@nebular/auth';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [

    {
      path: 'login',
      component: LoginComponent,
    },

    {
      path: 'register',
      component: RegisterComponent,
    },

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
