import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamCreateComponent } from './components/team-create/team-create.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamAddUserComponent } from '../teams/components/team-add-user/team-add-user.component';

const routes: Routes = [
  { component: TeamsComponent, path: 'teams' },
  { component: TeamDetailsComponent, path: 'teams/details/:id' },
  { component: TeamAddUserComponent, path: 'teams/details/:id/users/add' },
  { component: TeamCreateComponent, path: 'teams/create' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
