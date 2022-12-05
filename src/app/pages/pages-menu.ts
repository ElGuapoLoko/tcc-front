import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Início',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },

  {
    title: 'Aplicação',
    group: true,
  },

  {
    title: 'Workflow',
    link: '/pages/workflow',
    icon: 'pantone-outline',
  },

  {
    title: 'Workflow Recebido',
    link: '/pages/workflow-recebido',
    icon: 'pantone-outline',
  },

  {
    title: 'Histórico Workflow',
    link: '/pages/workflow-historico',
    icon: 'pantone-outline',
  },

  {
    title: 'Acompanhamento de Fluxo',
    icon: 'pantone-outline',
  },

  {
    title: 'Meus dados',
    icon: 'pantone-outline',
  },

  {
    title: 'Relatórios',
    icon: 'pantone-outline',
  },

  {
    title: 'Suporte',
    icon: 'pantone-outline',
  }


  
];
