import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamCreateComponent } from './components/team-create/team-create.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';

const routes: Routes = [
  { component: TeamsComponent, path: 'teams' },
  { component: TeamDetailsComponent, path: 'teams/details/:id' },
  { component: TeamCreateComponent, path: 'teams/create' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
