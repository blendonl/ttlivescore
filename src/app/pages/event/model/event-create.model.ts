import { EventType } from './event-type.model';

export type EventCreate = {
  name: string;
  eventType: EventType;
  date: Date;
};
