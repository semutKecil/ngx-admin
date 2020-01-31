import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserAddComponent } from './user-add/user-add.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  // NbProgressBarModule,
  // NbTabsetModule,
  // NbUserModule,
  // NbIconModule,
  // NbSelectModule,
  // NbListModule,
} from '@nebular/theme';


@NgModule({
  declarations: [UserComponent, UserListComponent, UserDetailComponent, UserFormComponent, UserAddComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbButtonModule,
    NbCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    NbInputModule,
    // NbProgressBarModule,
    // NbTabsetModule,
    // NbUserModule,
    NbIconModule,
    // NbSelectModule,
    // NbListModule,
  ],
})
export class UserModule { }
