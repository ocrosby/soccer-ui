import { Component, OnInit } from '@angular/core';
import { NcaaService } from 'src/app/core/ncaa.service';
import { USCRanking } from 'src/app/shared/ncaa';

@Component({
  selector: 'app-usc-rankings',
  templateUrl: './usc-rankings.component.html',
  styleUrls: ['./usc-rankings.component.scss']
})
export class UscRankingsComponent implements OnInit {
    rankings: USCRanking[] = [];
    value = 50;
    overlay = true;
    currentDivision: string = 'di';

    displayedColumns: string[] = ['rank', 'school', 'previous', 'record'];

    constructor(private ncaaService: NcaaService) {}

    ngOnInit(): void {
        this.onDivisionChange(null);
    }

    onDivisionChange(event: any) {
        this.overlay = true;

        this.ncaaService
            .getUscRankings(this.currentDivision)
            .subscribe((data: any[]) => {
                this.rankings = data;
                this.overlay = false;
            });
    }
}
