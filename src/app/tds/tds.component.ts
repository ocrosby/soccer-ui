import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tds',
    templateUrl: './tds.component.html',
    styleUrls: ['./tds.component.scss'],
})
export class TdsComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onPlayers() {
        this.router.navigate(['/tds/players']);
    }

    onCommitments() {
        this.router.navigate(['/tds/commitments']);
    }

    onConferences() {
        this.router.navigate(['/tds/college/conferences']);
    }
}
