import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },  
  {
    title: 'Setting',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'User',
        icon: 'person-outline',
        link: '/pages/setting/user/list',
      },      
    ],
  },
];
