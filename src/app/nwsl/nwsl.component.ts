import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nwsl',
    templateUrl: './nwsl.component.html',
    styleUrls: ['./nwsl.component.scss'],
})
export class NwslComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onPlayers() {
        this.router.navigate(['/nwsl/players']);
    }

    onStandings() {
        this.router.navigate(['/nwsl/standings']);
    }
}
