import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { EventService } from '../../../service/event.service';
import { EventCreate } from '../../../model/event-create.model';
import { EventType } from '../../../model/event-type.model';
import { firstValueFrom } from 'rxjs';
import { Tournament } from '../../../model/tournament/tournament.model';
import { TournamentCreate } from '../../../model/tournament/tournament-create.model';
import { Category } from '../../../../user/models/category.model';

@Component({
  selector: 'app-tournament-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './tournament-create.component.html',
  styleUrl: './tournament-create.component.scss',
})
export class TournamentCreateComponent {
  formGroup: FormGroup;

  constructor(private eventService: EventService) {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      gender: new FormControl(''),
      date: new FormControl(''),
    });
  }

  async onSubmit() {
    let event: TournamentCreate = {
      name: this.formGroup.get('name')?.value ?? '',
      category: this.formGroup.get('category')?.value ?? '',
      date: this.formGroup.get('date')?.value,
      gender: this.formGroup.get('gender')?.value,
    };

    let createdEvent = await firstValueFrom(
      this.eventService.saveTournament(event),
    );

    console.log(createdEvent);
  }

  getCategories() {
    return Object.keys(Category).filter((item) => isNaN(Number(item)));
  }
}
