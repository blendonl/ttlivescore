import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { component: UserComponent, path: 'users' },
  { component: UserCreateComponent, path: 'users/create' },
  { component: UserDetailsComponent, path: 'users/details/:id' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
