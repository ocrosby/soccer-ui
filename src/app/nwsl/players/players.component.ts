import { Component, OnInit } from '@angular/core';
import { NwslService } from 'src/app/core/nwsl.service';
import { Player } from 'src/app/shared/nwsl';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
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
                source: []
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
