import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './team-add-user.component.html',
  styleUrl: './team-add-user.component.scss',
})
export class TeamAddUserComponent {}
