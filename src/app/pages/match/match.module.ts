import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { MatchRoutingModule } from './match-routing.module';
import { MatchPointsComponent } from './components/match-points/match-points.component';



@NgModule({
  declarations: [
    MatchListComponent,
    MatchDetailsComponent,
    MatchPointsComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
