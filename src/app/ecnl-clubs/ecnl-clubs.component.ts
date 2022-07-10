import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ECNLClub } from '../club';
import { EcnlService } from '../ecnl.service';

@Component({
    selector: 'app-ecnl-clubs',
    templateUrl: './ecnl-clubs.component.html',
    styleUrls: ['./ecnl-clubs.component.scss'],
})
export class EcnlClubsComponent implements OnInit {
    clubs: ECNLClub[] = [];
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = 50;
    overlay = true;
    dataSource: any;

    displayedColumns: string[] = ['name', 'city', 'state'];

    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private ecnlService: EcnlService,
        private _liveAnnouncer: LiveAnnouncer
    ) {
        this.sort = new MatSort();
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.ecnlService.getClubs().subscribe((data: any[]) => {
            this.clubs = data;
            this.overlay = false;
            this.dataSource = new MatTableDataSource(this.clubs);
            this.dataSource.sort = this.sort;
        });

    }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}
