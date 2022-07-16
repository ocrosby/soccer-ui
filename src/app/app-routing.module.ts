import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitmentsComponent } from './commitments/commitments.component';
import { EcnlClubsComponent } from './ecnl-clubs/ecnl-clubs.component';
import { GaClubsComponent } from './ga-clubs/ga-clubs.component';
import { HomeComponent } from './home/home.component';
import { NwslPlayersComponent } from './nwsl-players/nwsl-players.component';
import { NwslStandingsComponent } from './nwsl-standings/nwsl-standings.component';
import { PlayersComponent } from './players/players.component';
import { RpiRankingsComponent } from './rpi-rankings/rpi-rankings.component';
import { UscRankingsComponent } from './usc-rankings/usc-rankings.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ecnl/clubs', component: EcnlClubsComponent },
    { path: 'ga/clubs', component: GaClubsComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'commitments', component: CommitmentsComponent },
    { path: 'ncaa/ranking/rpi', component: RpiRankingsComponent },
    { path: 'ncaa/ranking/usc', component: UscRankingsComponent },
    { path: 'nwsl/players', component: NwslPlayersComponent },
    { path: 'nwsl/standings', component: NwslStandingsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
