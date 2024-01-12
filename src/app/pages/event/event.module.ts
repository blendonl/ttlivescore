import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCreateComponent } from './component/event/event-create/event-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventRoutingModule } from './event-routing.module';
import { EventDetailsComponent } from './component/event/event-details/event-details.component';
import { EventsComponent } from './component/event/events/events.component';

@NgModule({
  declarations: [EventCreateComponent, EventDetailsComponent, EventsComponent],
  imports: [CommonModule, ReactiveFormsModule, EventRoutingModule],
})
export class EventModule {}
