import { Component, OnInit } from '@angular/core';
import { NcaaService } from 'src/app/core/ncaa.service';
import { RPIRanking } from 'src/app/shared/ncaa';

@Component({
    selector: 'app-rpi-rankings',
    templateUrl: './rpi-rankings.component.html',
    styleUrls: ['./rpi-rankings.component.scss'],
})
export class RpiRankingsComponent implements OnInit {
    rankings: RPIRanking[] = [];
    value = 50;
    overlay = true;

    displayedColumns: string[] = [
        'rank',
        'school',
        'conference',
        'record',
        'neutral',
        'non-div-1',
    ];

    constructor(private ncaaService: NcaaService) {}

    ngOnInit(): void {
        this.ncaaService.getRpiRankings().subscribe((data: any[]) => {
            this.rankings = data;
            this.overlay = false;
        });
    }
}
