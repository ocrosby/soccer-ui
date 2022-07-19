import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { NwslComponent } from './nwsl.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
    { path: '', component: NwslComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'standings', component: StandingsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NwslRoutingModule {}
