import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { WorkflowService } from '../../@core/utils/workflow.service';

@Component({
  selector: 'ngx-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  formWorkflow = this.fb.group({

    atividades: this.fb.array([
      this.fb.group({
        nome_atividade: '',
        responsavel: '',
        tempo_de_execucao: ''
      })
    ])

  });

  criarWorkflow;

  constructor(private fb: FormBuilder, private toastrService: NbToastrService, public workFlowService: WorkflowService) { }

  ngOnInit(): void {
    console.log(this.listaAtividades);

  }

  get listaAtividades(): FormArray {
    return this.formWorkflow.get('atividades') as FormArray;
  }

  adicionarAtividade() {
    this.listaAtividades.push(
      this.fb.group({
        nome_atividade: '',
        responsavel: '',
        tempo_de_execucao: ''
      })
    );
  }

  removerAtividade(index) {
    if (this.listaAtividades.length == 1) {
      this.showError('Erro!', 'O workflow deve ser ao menos uma atividade.', true);
      return;
    }
    this.listaAtividades.removeAt(index);
  }

  showError(title, message, preventDuplicates) {
    this.toastrService.danger(
      message,
      title,
      { preventDuplicates });
  }

}
