import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ncaa',
    templateUrl: './ncaa.component.html',
    styleUrls: ['./ncaa.component.scss'],
})
export class NcaaComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onRpiRanking() {
        this.router.navigate(['/ncaa/ranking/rpi']);
    }

    onUscRanking() {
        this.router.navigate(['/ncaa/ranking/usc']);
    }
}
