import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './component/event-create/event-create.component';
import { TournamentCreateComponent } from './component/tournament/tournament-create/tournament-create.component';

const routes: Routes = [
  { component: EventCreateComponent, path: 'events/create' },
  { component: TournamentCreateComponent, path: 'tournaments/create' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
