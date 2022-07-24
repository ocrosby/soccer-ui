import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EcnlService } from 'src/app/core/ecnl.service';
import { ECNLClub } from '../../shared/club';

@Component({
    selector: 'app-clubs',
    templateUrl: './clubs.component.html',
    styleUrls: ['./clubs.component.scss'],
})
export class ClubsComponent implements OnInit {
    clubs: ECNLClub[] = [];
    value = 50;
    overlay = true;
    dataSource: any;

    displayedColumns: string[] = ['name', 'city', 'state'];

    constructor(
        private ecnlService: EcnlService,
        private _liveAnnouncer: LiveAnnouncer
    ) {
    }

    ngOnInit(): void {}

    ngAfterViewInit() {
        this.ecnlService.getClubs().subscribe((data: any[]) => {
            this.clubs = data;
            this.overlay = false;
        });
    }
}
