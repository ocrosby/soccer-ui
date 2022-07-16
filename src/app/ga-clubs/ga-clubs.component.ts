import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
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
    minimalTable = false;

    displayedColumns: string[] = ['name', 'state', 'conference'];

    constructor(private gaService: GaService, private responsive: BreakpointObserver) {}

    ngOnInit(): void {
        this.gaService.getClubs().subscribe((data: any[]) => {
            this.clubs = data;
            this.overlay=false;
        });

        this.responsive.observe([
            Breakpoints.Handset
        ]).subscribe(result => {
            if (result.matches) {
                this.minimalTable = true;
            } else {
                this.minimalTable = false;
            }
        })
    }
}
