import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdsRoutingModule } from './tds-routing.module';
import { TdsComponent } from './tds.component';
import { CommitmentsComponent } from './commitments/commitments.component';
import { PlayersComponent } from './players/players.component';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { TdsService } from '../core/tds.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { ClarityModule } from "@clr/angular";
import { NgSelectModule } from '@ng-select/ng-select';
import { CollegeConferencesComponent } from './college-conferences/college-conferences.component';
import { TransfersComponent } from './transfers/transfers.component';
import { TransferSummaryComponent } from './transfer-summary/transfer-summary.component';
import { CommitmentsPieChartComponent } from './commitments-pie-chart/commitments-pie-chart.component';

@NgModule({
    declarations: [TdsComponent, CommitmentsComponent, PlayersComponent, CollegeConferencesComponent, TransfersComponent, TransferSummaryComponent, CommitmentsPieChartComponent],
    imports: [
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule,
        FlexLayoutModule,
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
