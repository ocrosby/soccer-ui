import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PlayersComponent } from './players/players.component';
import { TdsService } from './tds.service';
import { NcaaService } from './ncaa.service';
import { EcnlService } from './ecnl.service';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { EcnlClubsComponent } from './ecnl-clubs/ecnl-clubs.component';
import { GaClubsComponent } from './ga-clubs/ga-clubs.component';

@NgModule({
    declarations: [AppComponent, PlayersComponent, MessagesComponent, ConfigComponent, HomeComponent, EcnlClubsComponent, GaClubsComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
    ],
    providers: [TdsService, NcaaService, EcnlService],
    bootstrap: [AppComponent],
})
export class AppModule {}
