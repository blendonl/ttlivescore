import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { MatchRoutingModule } from './match-routing.module';



@NgModule({
  declarations: [
    MatchListComponent,
    MatchDetailsComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
