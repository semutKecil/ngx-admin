import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingComponent } from './setting.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SettingRoutingModule {
}

