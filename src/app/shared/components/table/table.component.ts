import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TournamentService } from '../../../pages/event/service/tournament.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() items: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);

  @Input() properties: [key: string, value: string][] = [];

  @Input() detailsRoute: string[] = ['details'];
  @Input() createRoute: string[] = ['create'];
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  deleteClicked(id: number): void {
    this.onDelete.emit(id);
  }

  constructor() {}

  getAllProperties() {
    console.log(this.items);
    return Object.getOwnPropertyNames(this.items.value[0] ?? '');
  }

  protected readonly Array = Array;
}
