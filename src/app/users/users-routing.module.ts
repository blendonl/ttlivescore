import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
  {component: UsersComponent, path: "users"},
  {component: UsersDetailsComponent, path: "users/:id"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
