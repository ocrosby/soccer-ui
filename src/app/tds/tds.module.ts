import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdsRoutingModule } from './tds-routing.module';
import { TdsComponent } from './tds.component';
import { CommitmentsComponent } from './commitments/commitments.component';
import { PlayersComponent } from './players/players.component';
import { MaterialModule } from '../material.module';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { TdsService } from '../core/tds.service';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    declarations: [TdsComponent, CommitmentsComponent, PlayersComponent],
    imports: [
        FormsModule,
        MaterialModule,
        CommonModule,
        CoreModule,
        SharedModule,
        TdsRoutingModule,
        NgxEchartsModule.forRoot({
            /**
             * This will import all modules from echarts.
             * If you only need custom modules,
             * please refer to [Custom Build] section.
             */
            echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
        })
    ],
    exports: [TdsComponent, CommitmentsComponent, PlayersComponent],
    providers: [TdsService]
})
export class TdsModule {}
