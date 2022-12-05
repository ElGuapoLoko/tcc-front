import { Injectable } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  editar: string;
  remover: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor() { }

  allColumns = ['name', 'editar', 'remover'];

  data: TreeNode<FSEntry>[] = [
    { data: { name: 'Solicitação De patrocínio', editar: '', remover: '' }, },
    { data: { name: 'Solicitação de compras', editar: '', remover: '' }, },
    { data: { name: 'Solicitação de projeto', editar: '', remover: '' }, },
  ];

}
