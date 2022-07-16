import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Conference } from '../conference';
import { Division } from '../division';
import { Player } from '../player';
import { School } from '../school';

import { TdsService } from '../tds.service';

@Component({
    selector: 'app-commitments',
    templateUrl: './commitments.component.html',
    styleUrls: ['./commitments.component.scss'],
})
export class CommitmentsComponent implements OnInit {
    overlay: boolean = false;
    selectedGender: string = 'female';
    selectedDivision: string = '';
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

    constructor(private tdsService: TdsService) {}

    ngOnInit(): void {
        this.tdsService.getDivisions().subscribe((data: any[]) => {
            this.divisions = data;
            this.overlay = false;

            this.selectedConference = "ASUN";
            this.selectedDivision = "di";
            this.onDivisionChange(null);
        });
    }

    onDivisionChange(event: any): void {
        this.overlay = true;
        this.tdsService
            .getConferences(this.selectedGender, this.selectedDivision)
            .subscribe((data: any[]) => {
                this.conferences = data;
                this.overlay = false;
            });
    }

    onConferenceChange(): void {
        this.overlay = true;
    }

    onSearch(event: any): void {
        this.chartData = [];
        this.overlay = true;
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
                this.overlay = false;

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
                    let item = { "name": league, "value": 0 };

                    for (let player of this.players) {
                        if (player.league === league) {
                            item["value"] += 1;
                        }
                    }

                    this.chartData.push(item);
                }

                // console.log(this.chartData);
            });
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
