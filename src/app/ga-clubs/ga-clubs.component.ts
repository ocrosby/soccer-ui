import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { GAClub } from '../club';
import { GaService } from '../ga.service';

@Component({
    selector: 'app-ga-clubs',
    templateUrl: './ga-clubs.component.html',
    styleUrls: ['./ga-clubs.component.scss'],
})
export class GaClubsComponent implements OnInit {
    clubs: GAClub[] = [];
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = 50;
    overlay = true;

    displayedColumns: string[] = ['name', 'state', 'conference'];

    constructor(private gaService: GaService) {}

    ngOnInit(): void {
        this.gaService.getClubs().subscribe((data: any[]) => {
            this.clubs = data;
            this.overlay=false;
        });
    }
}
