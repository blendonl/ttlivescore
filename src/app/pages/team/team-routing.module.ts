import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [{ component: TeamsComponent, path: 'teams' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
