import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { MatchRoutingModule } from './match-routing.module';
import { MatchPointsComponent } from './components/match-points/match-points.component';
import { MatchEditComponent } from './components/match-edit/match-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    MatchListComponent,
    MatchDetailsComponent,
    MatchPointsComponent,
    MatchEditComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule

  ]
})
export class MatchModule { }
