import { Component, OnInit } from '@angular/core';
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
        'position',
        'height',
        'country',
        'hometown',
        // 'dob',
        'jersey',
        'team'
    ];

    constructor(private nwslService: NwslService) { }

    ngOnInit(): void {
        this.overlay = true;

        this.nwslService.getPlayers()
            .subscribe((data: any[]) => {
                this.players = data;
                this.overlay = false;
            });
    }
}
