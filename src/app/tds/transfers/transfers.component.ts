import { Component, OnInit } from '@angular/core';
import { TdsService } from 'src/app/core/tds.service';
import { Transfer } from 'src/app/shared/tds';

@Component({
    selector: 'app-transfers',
    templateUrl: './transfers.component.html',
    styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit {
    overlay: boolean = false;
    transfers: Transfer[] = [];

    constructor(private tdsService: TdsService) {}

    ngOnInit(): void {
        this.overlay = true;

        this.tdsService.getTransfers().subscribe((data: any[]) => {
            this.transfers = data;
            this.overlay = false;
        });
    }
}
