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
    loadingData: boolean = false;
    selectedGender: string = 'female';
    selectedDivision: string = 'di';
    selectedConference: string = '';
    selectedYear: string = '2023';

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

    options: any;
    chartData: any[] = [];

    subscriptions: Subscription[] = [];

    constructor(private tdsService: TdsService) {}

    ngOnInit(): void {
        this.loadingData = true;
        this.tdsService.getDivisions().subscribe((data: any[]) => {
            this.divisions = data;
            this.loadingData = false;

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
        console.log('Selected division is ', this.selectedDivision);

        this.loadingData = true;
        this.tdsService
            .getConferences(this.selectedGender, this.selectedDivision)
            .subscribe((response) => {
                this.conferences = response;
                this.loadingData = false;

                this.selectedConference = this.conferences[0].name;
            });
    }

    onSubmit(): void {
        this.chartData = [];
        this.loadingData = true;
        this.tdsService
            .getCommitments(
                this.selectedGender,
                this.selectedDivision,
                this.selectedConference,
                this.selectedYear
            )
            .subscribe((data: any[]) => {
                this.schools = data;
                this.players = [];

                for (let school of this.schools) {
                    for (let player of school.players) {
                        player.commitment = school.name;
                        this.players.push(player);
                    }
                }
                this.loadingData = false;

                this.setOptions();

                let leagues = [];
                for (let player of this.players) {
                    let found = false;

                    if (player.league === null) {
                        continue;
                    }

                    for (let league of leagues) {
                        if (league === player.league) {
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        leagues.push(player.league);
                    }
                }

                leagues.sort();

                for (let league of leagues) {
                    let item = { name: league, value: 0 };

                    for (let player of this.players) {
                        if (player.league === league) {
                            item['value'] += 1;
                        }
                    }

                    this.chartData.push(item);
                }
            },
            err => console.log('HTTP Error', err)
            );
    }

    private setOptions() {
        this.options = {
            tooltip: {
                trigger: 'item',
            },
            series: [
                {
                    type: 'pie',
                    radius: '60%',
                    data: this.chartData,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        };
    }
}
