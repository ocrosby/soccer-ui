import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpiRankingsComponent } from './rpi-rankings/rpi-rankings.component';
import { UscRankingsComponent } from './usc-rankings/usc-rankings.component';
import { NcaaComponent } from './ncaa.component';

const routes: Routes = [
    { path: '', component: NcaaComponent },
    { path: 'ranking/rpi', component: RpiRankingsComponent },
    { path: 'ranking/usc', component: UscRankingsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NcaaRoutingModule {}
