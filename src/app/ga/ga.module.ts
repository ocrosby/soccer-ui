import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaRoutingModule } from './ga-routing.module';
import { GaComponent } from './ga.component';
import { ClubsComponent } from './clubs/clubs.component';
import { MaterialModule } from '../material.module';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { GaService } from '../core/ga.service';
import { ClarityModule } from "@clr/angular";

@NgModule({
    declarations: [GaComponent, ClubsComponent],
    imports: [
        ClarityModule,
        MaterialModule,
        CommonModule,
        CoreModule,
        SharedModule,
        GaRoutingModule,
    ],
    exports: [GaComponent, ClubsComponent],
    providers: [GaService],
})
export class GaModule {}
