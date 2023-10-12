import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatchPointsComponent} from "./match-points/match-points.component";

const routes: Routes = [
  {component: MatchPointsComponent, path: "matches"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule{ }
