import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../@core/utils/workflow.service';

@Component({
  selector: 'ngx-workflow-recebido',
  templateUrl: './workflow-recebido.component.html',
  styleUrls: ['./workflow-recebido.component.scss']
})
export class WorkflowRecebidoComponent implements OnInit {

  constructor(public workFlowService: WorkflowService) { }

  ngOnInit(): void {
  }

}
