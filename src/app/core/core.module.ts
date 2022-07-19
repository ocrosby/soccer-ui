import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';
import { EcnlService } from './ecnl.service';
import { GaService } from './ga.service';
import { LoggerService } from './logger.service';
import { MessageService } from './message.service';
import { NcaaService } from './ncaa.service';
import { NwslService } from './nwsl.service';
import { TdsService } from './tds.service';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [ConfigService, EcnlService, GaService, LoggerService, MessageService, NcaaService, NwslService, TdsService]
})
export class CoreModule {}
