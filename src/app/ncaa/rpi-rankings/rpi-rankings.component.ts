import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { NcaaService } from 'src/app/core/ncaa.service';
import { RPIRanking } from 'src/app/shared/ncaa';

@Component({
    selector: 'app-rpi-rankings',
    templateUrl: './rpi-rankings.component.html',
    styleUrls: ['./rpi-rankings.component.scss'],
})
export class RpiRankingsComponent implements OnInit {
    rankings: RPIRanking[] = [];
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'indeterminate';
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
