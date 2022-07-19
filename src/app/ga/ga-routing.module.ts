import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsComponent } from './clubs/clubs.component';
import { GaComponent } from './ga.component';

const routes: Routes = [
    { path: '', component: GaComponent },
    { path: 'clubs', component: ClubsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GaRoutingModule {}
