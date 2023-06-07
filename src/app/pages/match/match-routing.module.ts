import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';


const routes: Routes = [
  {component: MatchListComponent, path: "matches"},
  {component: MatchDetailsComponent, path: "matches/:id"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
