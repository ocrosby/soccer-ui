import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TdsService } from 'src/app/core/tds.service';
import { Conference } from 'src/app/shared/conference';
import { Division } from 'src/app/shared/division';
import { Player } from 'src/app/shared/player';
import { School } from 'src/app/shared/school';

@Component({
    selector: 'app-commitments',
    templateUrl: './commitments.component.html',
    styleUrls: ['./commitments.component.scss'],
})
export class CommitmentsComponent implements OnInit {
    overlay: boolean = false;
    selectedGender: string = 'female';
    selectedDivision: string = 'di';
    selectedConference: string = '';
    selectedYear: string = '2023';

    currentYear: string = '';
    currentConference: string = '';

    divisions: Division[] = [];
    conferences: Conference[] = [];
    schools: School[] = [];
    players: Player[] = [];

    displayedColumns = [
        'name',
        'position',
        'club',
        'league',
        'year',
        'state',
        'commitment',
    ];

    subscriptions: Subscription[] = [];

    constructor(private tdsService: TdsService) {
        this.currentYear = this.selectedYear;
        this.currentConference = this.selectedConference;
    }

    ngOnInit(): void {
        this.overlay = true;
        this.tdsService.getDivisions().subscribe((data: any[]) => {
            this.divisions = data;
            this.overlay = false;

            this.selectedDivision = this.divisions[0].divisionName;
            this.onDivisionChange();
        });
    }

    findDivisionByName(name: string): Division | null {
        for (let division of this.divisions) {
            if (division.divisionName === name) {
                return division;
            }
        }

        return null;
    }

    findConferenceByName(name: string): Conference | null {
        for (let conference of this.conferences) {
            if (conference.name === name) {
                return conference;
            }
        }

        return null;
    }

    onDivisionChange() {
        this.overlay = true;
        this.tdsService
            .getConferences(this.selectedGender, this.selectedDivision)
            .subscribe((response) => {
                this.conferences = response;
                this.overlay = false;

                this.selectedConference = this.conferences[0].name;
            });
    }

    onSubmit(): void {
        this.schools = [];
        this.players = [];
        this.overlay = true;
        this.currentYear = this.selectedYear;
        this.currentConference = this.selectedConference;
        this.tdsService
            .getCommitments(
                this.selectedGender,
                this.selectedDivision,
                this.selectedConference,
                this.selectedYear
            )
            .subscribe((data: any[]) => {
                this.overlay = false;
                this.schools = data;
                this.players = [];

                for (let school of this.schools) {
                    for (let player of school.players) {
                        player.commitment = school.name;
                        this.players.push(player);
                    }
                }
                this.overlay = false;
            });
    }
}
