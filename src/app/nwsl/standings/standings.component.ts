import { Component, OnInit } from '@angular/core';
import { NwslService } from 'src/app/core/nwsl.service';
import { Standing } from 'src/app/shared/nwsl';

@Component({
    selector: 'app-standings',
    templateUrl: './standings.component.html',
    styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent implements OnInit {
    overlay: boolean = false;

    standings: Standing[] = [];

    displayedColumns: string[] = [
        'rank',
        'team',
        'points',
        'overall',
        'home',
        'away',
        'gamesplayed',
        'difference',
        'for',
        'against',
        'form',
    ];

    constructor(private nwslService: NwslService) {}

    ngOnInit(): void {
        this.overlay = true;

        this.nwslService.getStandings().subscribe((data: any[]) => {
            this.standings = data;
            this.overlay = false;
        });
    }
}
