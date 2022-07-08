import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcnlClubsComponent } from './ecnl-clubs/ecnl-clubs.component';
import { GaClubsComponent } from './ga-clubs/ga-clubs.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ecnl/clubs', component: EcnlClubsComponent },
    { path: 'ga/clubs', component: GaClubsComponent },
    { path: 'ecnl/players', component: PlayersComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
