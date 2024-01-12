import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';
import { FormControl, FormGroup } from '@angular/forms';
import { EventCreate } from '../../model/event-create.model';
import { EventType } from '../../model/event-type.model';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrl: './event-create.component.scss',
})
export class EventCreateComponent {
  formGroup: FormGroup;

  constructor(private eventService: EventService) {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      type: new FormControl(''),
      date: new FormControl(''),
    });
  }

  async onSubmit() {
    let eventType: string = this.formGroup.get('type')?.value + ' ';

    let event: EventCreate = {
      name: this.formGroup.get('name')?.value ?? '',
      eventType: EventType[eventType as keyof typeof EventType],
      date: this.formGroup.get('date')?.value,
    };

    let createdEvent = await firstValueFrom(this.eventService.saveUser(event));

    console.log(createdEvent);
  }

  getEventType() {
    return Object.keys(EventType).filter((item) => isNaN(Number(item)));
  }
}
