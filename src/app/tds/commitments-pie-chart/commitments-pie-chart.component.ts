import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ValueFromArray } from 'rxjs';
import { LoggerService } from 'src/app/core/logger.service';
import { Player } from 'src/app/shared/player';
import { School } from 'src/app/shared/school';

class ChartData {
    name: string;
    league: string;
    value: number;

    constructor(league: string, value: number = 0) {
        this.name = '';
        this.league = league;
        this.value = value;      
    }

    calculatePercentage(numberOfPlayers: number): number {
        let percentage;

        percentage = 100 * (this.value / numberOfPlayers);
        percentage = Math.round(percentage);

        return percentage;
    }

    assignName(numberOfPlayers: number): void {
        this.name = this.league + ' ' + this.calculatePercentage(numberOfPlayers) + '%';
    }
}

@Component({
    selector: 'app-commitments-pie-chart',
    templateUrl: './commitments-pie-chart.component.html',
    styleUrls: ['./commitments-pie-chart.component.scss'],
})
export class CommitmentsPieChartComponent implements OnInit, OnChanges {
    options: any;
    chartData: any[] = [];

    @Input() schools: School[];

    constructor(private logger: LoggerService) {
        this.schools = [];
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.logger.log(changes);

        this.setOptions();        
    }

    ngOnInit(): void {
        this.setOptions();
    }

    private createChartData(league: string, numberOfPlayers: number) {
        let data: ChartData = new ChartData(league);

        this.schools.forEach(school => school.players.forEach(player => {
            if (player.league === league) {
                data.value += 1;
            }
        }));

        data.assignName(numberOfPlayers);

        return data;
    }

    private countPlayers(): number {
        let count = 0;

        this.schools.forEach(school => school.players.forEach(() => count += 1));

        return count;
    }

    private addChartData(leagues: string[]): void {
        const numberOfPlayers = this.countPlayers();

        for (let league of leagues) {
            let data = this.createChartData(league, numberOfPlayers);

            this.chartData.push(data);
        }
    }

    private getLeagues(): string[] {
        let leagues = [];

        for (let school of this.schools) {
            for (let player of school.players) {
                if (this.existsInArray<string>(player.league, leagues)) {
                    continue;
                }

                leagues.push(player.league);
            }
        }

        return leagues;
    }

    private existsInArray<T>(targetValue: T, values: T[]) {
        for (const element of values) {
            let value = element;

            if (value === targetValue) {
                return true;
            }
        }

        return false;
    }    

    private setOptions() {
        this.chartData = [];

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

        this.addChartData(this.getLeagues());
    }
}
