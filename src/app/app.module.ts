import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './pages/user/user.module';
import { MatchModule } from './pages/match/match.module';
import { AppComponent } from './core/components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { LeagueModule } from './pages/league/league.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeagueModule,
    UserModule,
    MatchModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
  ],
  providers: [{ provide: 'MAX_VALUE_SIZE', useValue: 1000000000000 }],
  bootstrap: [AppComponent],
})
export class AppModule {}
