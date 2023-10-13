import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './pages/user/user.module';
import { MatchModule } from './pages/match/match.module';
import { AppComponent } from './core/components/app/app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    MatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
