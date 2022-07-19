import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsComponent } from './clubs/clubs.component';
import { EcnlComponent } from './ecnl.component';

const routes: Routes = [
    { path: '', component: EcnlComponent },
    { path: 'clubs', component: ClubsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EcnlRoutingModule {}
