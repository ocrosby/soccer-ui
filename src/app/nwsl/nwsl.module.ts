import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NwslRoutingModule } from './nwsl-routing.module';
import { NwslComponent } from './nwsl.component';
import { PlayersComponent } from './players/players.component';
import { StandingsComponent } from './standings/standings.component';
import { NwslService } from '../core/nwsl.service';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { ClarityModule } from "@clr/angular";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [NwslComponent, PlayersComponent, StandingsComponent],
    imports: [
        FormsModule,
        ClarityModule,
        MaterialModule,
        CommonModule,
        CoreModule,
        SharedModule,
        NwslRoutingModule,
        NgxEchartsModule.forRoot({
            /**
             * This will import all modules from echarts.
             * If you only need custom modules,
             * please refer to [Custom Build] section.
             */
            echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
        })
    ],
    providers: [NwslService],
})
export class NwslModule {}
