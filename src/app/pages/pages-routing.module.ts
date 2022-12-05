import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { WorkflowRecebidoComponent } from './workflow-recebido/workflow-recebido.component';
import { WorkflowHistoricoComponent } from './workflow-historico/workflow-historico.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    {
      path: 'dashboard',
      component: DashboardComponent,
    },

    {
      path: 'profile',
      component: ProfileComponent,
    },

    {
      path: 'workflow',
      component: WorkflowComponent,
    },

    {
      path: 'workflow-recebido',
      component: WorkflowRecebidoComponent,
    },

    {
      path: 'workflow-historico',
      component: WorkflowHistoricoComponent,
    },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {  }
