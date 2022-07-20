import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcnlRoutingModule } from './ecnl-routing.module';
import { EcnlComponent } from './ecnl.component';
import { ClubsComponent } from './clubs/clubs.component';
import { MaterialModule } from '../material.module';
import { CoreModule } from '@angular/flex-layout';
import { EcnlService } from '../core/ecnl.service';
import { SharedModule } from '../shared/shared.module';
import { ClarityModule } from "@clr/angular";
@NgModule({
    declarations: [EcnlComponent, ClubsComponent],
    imports: [
        MaterialModule,
        ClarityModule,
        CommonModule,
        CoreModule,
        SharedModule,
        EcnlRoutingModule,
    ],
    exports: [EcnlComponent, ClubsComponent],
    providers: [EcnlService],
})
export class EcnlModule {}
