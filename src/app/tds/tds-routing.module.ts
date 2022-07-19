import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitmentsComponent } from './commitments/commitments.component';
import { PlayersComponent } from './players/players.component';
import { TdsComponent } from './tds.component';

const routes: Routes = [
    { path: '', component: TdsComponent },
    { path: 'commitments', component: CommitmentsComponent },
    { path: 'players', component: PlayersComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TdsRoutingModule {}
