import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchPointsComponent } from './match-points/match-points.component';
import {MatchesRoutingModule} from "./matches-routing.module";



@NgModule({
  declarations: [
    MatchPointsComponent
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule

],
  exports: [
    MatchPointsComponent
  ]
})
export class MatchesModule { }
