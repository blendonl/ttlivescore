import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './component/event/event-create/event-create.component';
import { TournamentCreateComponent } from './component/tournament/tournament-create/tournament-create.component';
import { TournamentListComponent } from './component/tournament/tournament-list/tournament-list.component';
import { TournamentDetailsComponent } from './component/tournament/tournament-details/tournament-details.component';
import { EventsComponent } from './component/event/events/events.component';
import { TournamentsComponent } from './component/tournament/tournaments/tournaments.component';
import { EventDetailsComponent } from './component/event/event-details/event-details.component';
import { WeeksComponent } from './component/week/weeks/weeks.component';
import { WeekCreateComponent } from './component/week/week-create/week-create.component';
import { WeekDetailsComponent } from './component/week/week-details/week-details.component';

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

  { component: WeeksComponent, path: 'events/weeks' },
  {
    component: WeekDetailsComponent,
    path: 'events/weeks/details/:id',
  },
  { component: WeekCreateComponent, path: 'events/weeks/create' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
