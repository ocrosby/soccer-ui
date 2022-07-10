import { Component, OnInit } from '@angular/core';
import { GAClub } from '../club';
import { GaService } from '../ga.service';

@Component({
    selector: 'app-ga-clubs',
    templateUrl: './ga-clubs.component.html',
    styleUrls: ['./ga-clubs.component.scss'],
})
export class GaClubsComponent implements OnInit {
    clubs: GAClub[] = [];

    displayedColumns: string[] = ['name', 'state', 'conference'];

    constructor(private gaService: GaService) {}

    ngOnInit(): void {
        this.gaService.getClubs().subscribe((data: any[]) => {
            console.log(data);
            this.clubs = data;
        });
    }
}
