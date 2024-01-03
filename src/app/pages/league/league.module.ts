import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLeagueComponent } from './components/create-league/create-league.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeagueRoutingModule } from './league-routing.module';
import { LeagueListComponent } from './components/league-list/league-list.component';

@NgModule({
  declarations: [CreateLeagueComponent, LeagueListComponent],
  imports: [CommonModule, LeagueRoutingModule, ReactiveFormsModule],
})
export class LeagueModule {}
