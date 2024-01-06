import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLeagueComponent } from './components/create-league/create-league.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { LeagueDetailsComponent } from './components/league-details/league-details.component';
import { LeagueAddTeamComponent } from './components/league-add-team/league-add-team.component';

const routes: Routes = [
  { component: LeagueListComponent, path: 'leagues' },
  { component: LeagueDetailsComponent, path: 'leagues/details/:id' },
  { component: LeagueAddTeamComponent, path: 'leagues/details/:id/teams/add' },
  { component: CreateLeagueComponent, path: 'leagues/create' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueRoutingModule {}
