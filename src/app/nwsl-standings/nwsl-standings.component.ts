import { Component, OnInit } from '@angular/core';
import { Standing } from '../nwsl';
import { NwslService } from '../nwsl.service';

@Component({
    selector: 'app-nwsl-standings',
    templateUrl: './nwsl-standings.component.html',
    styleUrls: ['./nwsl-standings.component.scss'],
})
export class NwslStandingsComponent implements OnInit {
    overlay: boolean = false;

    standings: Standing[] = [];

    displayedColumns: string[] = [
        "rank",
        "team",
        "points",
        "overall",
        "home",
        "away",
        "difference",
        "for",
        "against",
        "form"
    ];

    constructor(private nwslService: NwslService) {}

    ngOnInit(): void {
        this.overlay = true;

        this.nwslService.getStandings()
            .subscribe((data: any[]) => {
                this.standings = data;
                this.overlay = false;
            });
    }
}
