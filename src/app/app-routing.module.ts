import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcnlClubsComponent } from './ecnl-clubs/ecnl-clubs.component';
import { GaClubsComponent } from './ga-clubs/ga-clubs.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { RpiRankingsComponent } from './rpi-rankings/rpi-rankings.component';
import { UscRankingsComponent } from './usc-rankings/usc-rankings.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ecnl/clubs', component: EcnlClubsComponent },
    { path: 'ga/clubs', component: GaClubsComponent },
    { path: 'ecnl/players', component: PlayersComponent },
    { path: 'ncaa/ranking/rpi', component: RpiRankingsComponent },
    { path: 'ncaa/ranking/usc', component: UscRankingsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
