import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-spinner-overlay',
    templateUrl: './spinner-overlay.component.html',
    styleUrls: ['./spinner-overlay.component.scss'],
})
export class SpinnerOverlayComponent implements OnInit {
    constructor() {}

    @Input() value: number = 100;
    @Input() diameter: number = 100;
    @Input() strokeWidth: number = 10;
    @Input() overlay: boolean = false;
    @Input() color: string = 'primary';

    ngOnInit(): void {}
}
