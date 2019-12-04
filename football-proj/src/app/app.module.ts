import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { PlayerInfoComponent } from './player-info/player-info.component';



const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'country-info', component: CountryInfoComponent},
  {path: 'team-info', component: TeamInfoComponent},
  {path: 'player-info', component: PlayerInfoComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountryInfoComponent,
    TeamInfoComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
