import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NwslDashboardComponent } from './nwsl-dashboard/nwsl-dashboard.component';
import { NwslStandingsComponent } from './nwsl-standings/nwsl-standings.component';
import { NwslPlayersComponent } from './nwsl-players/nwsl-players.component';

@NgModule({
    declarations: [
    NwslDashboardComponent,
    NwslStandingsComponent,
    NwslPlayersComponent
  ],
    imports: [CommonModule],
    exports: [NwslDashboardComponent, NwslStandingsComponent, NwslPlayersComponent],
})
export class NwslModule {}
