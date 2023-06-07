import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';



@NgModule({
  declarations: [
    MatchListComponent,
    MatchDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MatchModule { }
