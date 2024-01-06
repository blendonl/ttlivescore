import { Component } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { League } from '../../models/league.model';
import { FormControl, FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { LeagueShort } from '../../models/league.short.model';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss'],
})
export class CreateLeagueComponent {
  createLeagueFormGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl('Senior'),
  });

  categories: string[];

  constructor(private leagueService: LeagueService) {
    this.categories = ['veteran', 'Senior', 'junior', 'kadet', 'mini-kadet'];
  }

  async createLeague(): Promise<LeagueShort> {
    let newLeague: LeagueShort | null = await firstValueFrom<LeagueShort>(
      this.leagueService.createLeague({
        name: this.createLeagueFormGroup.get('name')?.value,
        category: this.createLeagueFormGroup.get('category')?.value,
      }),
    );
    console.log(newLeague);
    return newLeague;
  }
}
