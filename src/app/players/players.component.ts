import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { Player } from '../player';
import { TdsService } from '../tds.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
    overlay: boolean = false;

    players: Player[] = [];

    selectedPosition: string;
    selectedGradYear: string;
    selectedRegion: string;
    selectedState: string;
    selectedGender: string;

    displayedColumns: string[] = [
        'name',
        'position',
        'club',
        'highSchool',
        'rating',
        'year',
        'state',
        'commitment',
    ];

    constructor(
        private tdsService: TdsService,
        private messageService: MessageService
    ) {
        this.selectedPosition = 'All';
        this.selectedGradYear = '2023';
        this.selectedRegion = 'All';
        this.selectedState = 'GA';
        this.selectedGender = 'female';
    }

    ngOnInit(): void {}

    onSearch(): void {
        this.overlay = true;

        this.tdsService
            .getPlayers(
                this.selectedPosition,
                this.selectedGradYear,
                this.selectedRegion,
                this.selectedState,
                this.selectedGender
            )
            .subscribe((data: any[]) => {
                this.players = data;
                this.overlay = false;
            });
    }
}
