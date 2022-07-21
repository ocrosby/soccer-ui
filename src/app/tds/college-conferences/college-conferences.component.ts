import { Component, OnInit } from '@angular/core';
import { TdsService } from 'src/app/core/tds.service';
import { Conference } from 'src/app/shared/conference';

@Component({
    selector: 'app-college-conferences',
    templateUrl: './college-conferences.component.html',
    styleUrls: ['./college-conferences.component.scss'],
})
export class CollegeConferencesComponent implements OnInit {
    overlay: boolean = false;
    selectedGender: string = 'female';
    selectedDivision: string = 'di';

    conferences: Conference[] = [];

    constructor(private tdsService: TdsService) {}

    ngOnInit(): void {
        this.onSubmit();
    }

    onSubmit(): void {
        this.overlay = true;
        this.tdsService.getConferences(this.selectedGender, this.selectedDivision).subscribe((data: any[]) => {
            this.conferences = data;
            this.overlay = false;
        });
    }
}
