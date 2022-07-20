import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ga',
    templateUrl: './ga.component.html',
    styleUrls: ['./ga.component.scss'],
})
export class GaComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onClubs() {
        this.router.navigate(['/ga/clubs']);
    }
}
