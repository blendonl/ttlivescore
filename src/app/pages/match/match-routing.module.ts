import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import {MatchPointsComponent} from "./components/match-points/match-points.component";


const routes: Routes = [
  {component: MatchListComponent, path: "matches"},
  {component: MatchDetailsComponent, path: "matches/:id"},
  {component: MatchPointsComponent, path: "matches/:id/points"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
