import { Component, OnInit } from '@angular/core';
import { ECNLClub } from '../club';
import { EcnlService } from '../ecnl.service';

@Component({
    selector: 'app-ecnl-clubs',
    templateUrl: './ecnl-clubs.component.html',
    styleUrls: ['./ecnl-clubs.component.scss'],
})
export class EcnlClubsComponent implements OnInit {
    clubs: ECNLClub[] = [];

    displayedColumns: string[] = ['name', 'city', 'state'];

    constructor(private ecnlService: EcnlService) {}

    ngOnInit(): void {
        this.ecnlService.getClubs().subscribe((data: any[]) => {
            console.log(data);
            this.clubs = data;
        });
    }
}
