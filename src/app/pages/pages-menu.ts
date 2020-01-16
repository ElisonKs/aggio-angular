import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Cadastros',
    icon: 'layout-outline',
    children: [
     {
       title: 'Segmentos',
       link: '/pages/tables/segmentos',
     },
     {
      title: 'Responsaveis',
      link: '/pages/tables/smart-table',
    },
    {
      title: 'Formas de Pagamento',
      link: '/pages/tables/smart-table',
    },
    {
      title: 'Status',
      link: '/pages/tables/smart-table',
    },
    {
      title: 'Empresas',
      link: '/pages/tables/smart-table',
    },
    {
      title: 'Entregadores',
      link: '/pages/tables/smart-table',
    }
  ]
}
 
 
 

 
];
