import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() items: any[] = [];

  @Input() properties: string[] = [];

  @Input() delete: (id: number) => void = (id) => {};
  @Input() detailsRoute: string[] = [];
  @Input() createRoute: string[] = [];

  constructor() {}

  getAllProperties() {
    console.log(this.items);
    return Object.getOwnPropertyNames(this.items[0] ?? '');
  }
}
