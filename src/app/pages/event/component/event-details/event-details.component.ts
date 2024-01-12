import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
})
export class EventDetailsComponent {
  constructor(private eventService: EventService) {}
}
