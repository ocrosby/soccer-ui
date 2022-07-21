import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeConferencesComponent } from './college-conferences/college-conferences.component';
import { CommitmentsComponent } from './commitments/commitments.component';
import { PlayersComponent } from './players/players.component';
import { TdsComponent } from './tds.component';

const routes: Routes = [
    { path: '', component: TdsComponent },
    { path: 'commitments', component: CommitmentsComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'college/conferences', component: CollegeConferencesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TdsRoutingModule {}
