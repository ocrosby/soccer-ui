import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { elementAt } from 'rxjs';
import { Transfer } from 'src/app/shared/tds';

class FrequencyData {
    constructor(name?: string, value?: number) {
        this.name = name !== undefined ? name : '';
        this.value = value !== undefined ? value : 0;
    }

    name: string = '';
    value: number = 0;
}

@Component({
    selector: 'app-transfer-summary',
    templateUrl: './transfer-summary.component.html',
    styleUrls: ['./transfer-summary.component.scss'],
})
export class TransferSummaryComponent implements OnInit {
    @Input() direction: string = 'in'; // Acceptable values are 'in' and 'out'.
    @Input() transfers: Transfer[] = [];

    schools: string[] = [];
    frequencyData: FrequencyData[] = [];
    frequencies: number[] = [];
    map: any = {}

    constructor() {}

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.transfers.length > 0) {
            this.transfers.sort((a, b) => a.formerSchoolName.localeCompare(b.formerSchoolName))
        }

        this.schools = this.getSchools();
        this.frequencyData = this.generateFrequencyData();
        this.frequencies = this.getFrequencies();
    }

    getSchoolsByFrequency(frequency: number): string[] {
        let schools: string[] = [];

        for (const datum of this.frequencyData) {
            if (datum.name.length === 0) {
                continue;
            }

            if(datum.value !== frequency) {
                continue;
            }

            schools.push(datum.name);
        }

        schools.sort();

        return schools;
    }

    private getSchools(): string[] {
        if (this.direction !== 'in' && this.direction !== 'out') {
            return [];
        }

        let schools: string[] = [];

        for (const transfer of this.transfers) {
            let schoolName: string = this.getName(transfer);

            if (this.existsInArray(schoolName, schools)) {
                continue;
            }

            schools.push(schoolName);
        }

        return schools;
    }

    private getName(transfer: Transfer): string {
        if (this.direction === 'in') {
            return transfer.newSchoolName;
        } else if (this.direction === 'out') {
            return transfer.formerSchoolName;
        } else {
            throw new Error('Invalid direction (expected "in" or "out")!');
        }
    }

    private generateFrequencyData(): FrequencyData[] {
        let frequencyDataArray: FrequencyData[] = [];

        this.schools.forEach(school => {
            let datum = new FrequencyData(school, 0);

            this.transfers.forEach(transfer => {
                if (this.getName(transfer) === school) {
                    datum.value += 1;
                }
            });

            frequencyDataArray.push(datum);
        })

        return frequencyDataArray;
    }

    private getFrequencies(): number[] {
        let frequencies: number[] = [];

        for (const datum of this.frequencyData) {
            if (this.existsInArray(datum.value, frequencies)) {
                continue;
            }

            frequencies.push(datum.value);
        }

        frequencies.sort((a, b) => a - b);

        return frequencies;
    }

    formerSchools(): string[] {
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

    newSchools(): string[] {
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

    private existsInArray(targetValue: any, values: any[]) {
        for (const element of values) {
            let value = element;

            if (value === targetValue) {
                return true;
            }
        }

        return false;
    }
}
