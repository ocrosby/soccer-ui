import { Component, OnInit } from '@angular/core';
import { TdsService } from 'src/app/core/tds.service';
import { Transfer } from 'src/app/shared/tds';

@Component({
    selector: 'app-transfers',
    templateUrl: './transfers.component.html',
    styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit {
    overlay: boolean = false;
    transfers: Transfer[] = [];

    newSchoolOptions: any;
    formerSchoolOptions: any;
    newSchoolChartData: any[] = [];
    formerSchoolChartData: any[] = [];

    formerFrequencyMap: any = {};
    newFrequencyMap: any = {};

    constructor(private tdsService: TdsService) {}

    existsInArray(targetValue: string, values: string[]) {
        for (const element of values) {
            let value = element;

            if (value === targetValue) {
                return true;
            }
        }

        return false;
    }

    getFormerFrequencies(): number[] {
        let frequencies: any[] = [];

        for (const element of this.formerSchoolChartData) {
            if (!this.existsInArray(element.value, frequencies)) {
                frequencies.push(element.value);
            }
        }

        frequencies.sort();

        return frequencies;
    }

    getNewFrequencies(): number[] {
        let frequencies: any[] = [];

        for (const element of this.newSchoolChartData) {
            if (!this.existsInArray(element.value, frequencies)) {
                frequencies.push(element.value);
            }
        }

        frequencies.sort();

        return frequencies;
    }

    getNewSchoolsWithFrequency(frequency: number, newFrequencies?: number[]): string[] {
        let schools: string[] = [];

        if (!newFrequencies) {
            newFrequencies = this.getNewFrequencies();
        }

        for (const element of this.newSchoolChartData) {
            if (element.name.length === 0) {
                continue;
            }

            if (element.value === frequency) {
                schools.push(element.name);
            }
        }

        schools.sort();

        return schools;
    }

    getFormerSchoolsWithFrequency(frequency: number, formerFrequencies?: number[]): string[] {
        let schools: string[] = [];

        if (!formerFrequencies) {
            formerFrequencies = this.getFormerFrequencies();
        }

        for (const element of this.formerSchoolChartData) {
            if (element.name.length === 0) {
                continue;
            }

            if (element.value === frequency) {
                schools.push(element.name);
            }
        }

        schools.sort();

        return schools;
    }

    getUniqueFormerSchools() {
        let schools: string[] = [];

        for (const element of this.transfers) {
            let transfer: Transfer = element;

            if (!this.existsInArray(transfer.formerSchoolName, schools)) {
                schools.push(transfer.formerSchoolName);
            }
        }

        schools.sort()

        return schools;
    }

    getUniqueNewSchools() {
        let schools: string[] = [];

        for (const element of this.transfers) {
            let transfer: Transfer = element;

            if (!this.existsInArray(transfer.newSchoolName, schools)) {
                schools.push(transfer.newSchoolName);
            }
        }

        schools.sort()

        return schools;
    }

    processNewSchools() {
        let schools = this.getUniqueNewSchools();

        this.newSchoolChartData = [];

        schools.forEach(school => {
            let item = { name: school, value: 0 };

            this.transfers.forEach(transfer => {
                if (transfer.newSchoolName === school) {
                    item['value'] += 1;
                }
            })

            this.newSchoolChartData.push(item);
        });
    }

    processFormerSchools() {
        let schools = this.getUniqueFormerSchools();

        this.formerSchoolChartData = [];

        schools.forEach(school => {
            let item = { name: school, value: 0 };

            this.transfers.forEach(transfer => {
                if (transfer.formerSchoolName === school) {
                    item['value'] += 1;
                }
            })

            this.formerSchoolChartData.push(item);
        });
    }

    ngOnInit(): void {
        this.overlay = true;

        this.tdsService.getTransfers().subscribe((data: any[]) => {
            this.transfers = data;

            this.setOptions();

            this.processFormerSchools();
            this.processNewSchools();

            let formerFrequencies = this.getFormerFrequencies();
            let newFrequencies = this.getNewFrequencies();

            for(let frequency of formerFrequencies) {
                let schools = this.getFormerSchoolsWithFrequency(frequency, formerFrequencies);
                this.formerFrequencyMap[frequency.toString()] = schools;
            }

            for(let frequency of newFrequencies) {
                let schools = this.getNewSchoolsWithFrequency(frequency, newFrequencies);
                this.newFrequencyMap[frequency.toString()] = schools;
            }

            this.overlay = false;
        });
    }

    private setOptions() {
        this.newSchoolOptions = {
            tooltip: {
                trigger: 'item',
            },
            series: [
                {
                    type: 'pie',
                    radius: '60%',
                    data: this.newSchoolChartData,
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

        this.formerSchoolOptions = {
            tooltip: {
                trigger: 'item',
            },
            series: [
                {
                    type: 'pie',
                    radius: '60%',
                    data: this.formerSchoolChartData,
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
