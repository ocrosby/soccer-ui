import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { GAClub } from '../../shared/club';
import { GaService } from '../../core/ga.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {
    clubs: GAClub[] = [];
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
