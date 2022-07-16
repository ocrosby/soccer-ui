import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Observable } from 'rxjs';
import { Player } from '../nwsl';
import { NwslService } from '../nwsl.service';

@Component({
  selector: 'app-nwsl-players',
  templateUrl: './nwsl-players.component.html',
  styleUrls: ['./nwsl-players.component.scss']
})
export class NwslPlayersComponent implements OnInit {
    overlay: boolean = false;

    players: Player[] = [];

    displayedColumns: string[] = [
        'name',
        'jersey',
        'position',
        'hometown',
        'country',
        'dob',
        'height',
        'team'
    ];

    options: any;
    chartData: any[] = [];

    constructor(private nwslService: NwslService) { }

    ngOnInit(): void {
        this.overlay = true;

        this.nwslService.getPlayers()
            .subscribe((data: any[]) => {
                this.players = data;
                this.overlay = false;

                this.setOptions();

                // Collect an array of unique countries
                let countries = [];
                for (let player of this.players) {
                    let found = false;

                    if (player.country === null) {
                        continue;
                    }

                    for (let country of countries) {
                        if (country === player.country) {
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        countries.push(player.country);
                    }
                }

                countries.sort();

                for (let country of countries) {
                    let count = 0;
                    for (let player of this.players) {
                        if (player.country === country) {
                            count += 1;
                        }
                    }

                    if (country !== 'USA') {
                        this.options.dataset[0].source.push([country, count])
                    }
                }

                console.log(this.chartData);
            });
    }

    private setOptions() {
        this.options = {
            dataset: [
              {
                dimensions: ['country', 'count' ],
                source: [
                //   ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
                //   ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
                //   ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
                //   ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
                //   ['Karle Neumann', 25, 'Engineer', 253, '2011-04-02'],
                //   ['Adrian Groß', 19, 'Teacher', '-', '2011-01-16'],
                //   ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
                //   ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
                //   ['Han Meimei', 67, 'Engineer', 366, '2011-03-12']
                ]
              },
              {
                transform: {
                  type: 'sort',
                  config: { dimension: 'count', order: 'desc' }
                }
              }
            ],
            xAxis: {
              type: 'category',
              axisLabel: { interval: 0, rotate: 30 }
            },
            yAxis: {},
            series: {
              type: 'bar',
              encode: { x: 'country', y: 'count' },
              datasetIndex: 1
            }
          };
    }
}
