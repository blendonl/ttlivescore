import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { TableComponent } from '../../shared/components/table/table.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgOptimizedImage,
    MatGridListModule,
    MatTabsModule,
    TableComponent,
  ],
  exports: [UserListComponent],
})
export class UserModule {}
