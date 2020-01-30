import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { UserComponent } from './user/user.component';
import {SettingRoutingModule} from './setting-routing.module';



@NgModule({
  declarations: [SettingComponent,UserComponent],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
