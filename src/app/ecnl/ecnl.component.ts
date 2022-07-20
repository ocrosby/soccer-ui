import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ecnl',
    templateUrl: './ecnl.component.html',
    styleUrls: ['./ecnl.component.scss'],
})
export class EcnlComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onClubs() {
        this.router.navigate(['/ecnl/clubs']);
    }
}
