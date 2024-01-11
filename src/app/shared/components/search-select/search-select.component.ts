import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-select',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './search-select.component.html',
  styleUrl: './search-select.component.scss',
})
export class SearchSelectComponent {
  @Input() items: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  allItems: any[] = [];
  @Input() properties: string[] = [];

  constructor() {}
  searchChange(event: any) {
    let value = event.target.value;

    this.items.next(
      this.allItems.filter((i) =>
        this.properties.forEach((p) => i[p].includes(value)),
      ),
    );
  }
}
