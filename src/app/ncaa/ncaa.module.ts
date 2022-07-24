import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NcaaRoutingModule } from './ncaa-routing.module';
import { NcaaComponent } from './ncaa.component';
import { RpiRankingsComponent } from './rpi-rankings/rpi-rankings.component';
import { UscRankingsComponent } from './usc-rankings/usc-rankings.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { NcaaService } from '../core/ncaa.service';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";

@NgModule({
    declarations: [NcaaComponent, RpiRankingsComponent, UscRankingsComponent],
    imports: [
        FormsModule,
        ClarityModule,
        CommonModule,
        CoreModule,
        SharedModule,
        NcaaRoutingModule,
    ],
    exports: [NcaaComponent, RpiRankingsComponent, UscRankingsComponent],
    providers: [NcaaService]
})
export class NcaaModule {}
