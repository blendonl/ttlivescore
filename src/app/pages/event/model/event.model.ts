import { EventType } from '@angular/router';

export type Event = {
  id: string;
  name: string;
  eventType: EventType;
};
