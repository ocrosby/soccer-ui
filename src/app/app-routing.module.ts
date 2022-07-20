import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ncaa', loadChildren: () => import('./ncaa/ncaa.module').then(m => m.NcaaModule) },
    { path: 'nwsl', loadChildren: () => import('./nwsl/nwsl.module').then(m => m.NwslModule) },
    { path: 'ga', loadChildren: () => import('./ga/ga.module').then(m => m.GaModule) },
    { path: 'ecnl', loadChildren: () => import('./ecnl/ecnl.module').then(m => m.EcnlModule) },
    { path: 'tds', loadChildren: () => import('./tds/tds.module').then(m => m.TdsModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
