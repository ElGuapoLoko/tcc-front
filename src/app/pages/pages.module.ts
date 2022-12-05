import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbInputModule, NbMenuModule, NbToastrModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { WorkflowComponent } from './workflow/workflow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkflowRecebidoComponent } from './workflow-recebido/workflow-recebido.component';
import { WorkflowService } from '../@core/utils/workflow.service';
import { WorkflowHistoricoComponent } from './workflow-historico/workflow-historico.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,

    NbButtonModule,
    NbCardModule,
    NbInputModule,

    ReactiveFormsModule,
    FormsModule,
    NbToastrModule,
    NbTreeGridModule,

    NbMenuModule,
  ],
  declarations: [
    PagesComponent,
    WorkflowComponent,
    WorkflowRecebidoComponent,
    WorkflowHistoricoComponent,

  ],
  providers: [
    WorkflowService
  ]
})
export class PagesModule {
}
