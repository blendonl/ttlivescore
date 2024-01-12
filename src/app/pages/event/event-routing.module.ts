import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './component/event/event-create/event-create.component';
import { TournamentCreateComponent } from './component/tournament/tournament-create/tournament-create.component';
import { TournamentListComponent } from './component/tournament/tournament-list/tournament-list.component';
import { TournamentDetailsComponent } from './component/tournament/tournament-details/tournament-details.component';
import { EventsComponent } from './component/event/events/events.component';
import { TournamentsComponent } from './component/tournament/tournaments/tournaments.component';
import { EventDetailsComponent } from './component/event/event-details/event-details.component';

const routes: Routes = [
  { component: EventsComponent, path: 'events' },
  { component: EventCreateComponent, path: 'events/create' },
  { component: EventDetailsComponent, path: 'events/details/:id' },
  { component: TournamentsComponent, path: 'events/tournaments' },
  {
    component: TournamentDetailsComponent,
    path: 'events/tournaments/details/:id',
  },
  { component: TournamentCreateComponent, path: 'events/tournaments/create' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
