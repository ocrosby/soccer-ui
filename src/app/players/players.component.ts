import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { Player } from '../player';
import { TdsService } from '../tds.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
    private players!: Observable<Player[]>;

    constructor(private tdsService: TdsService, private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.players = this.tdsService.getPlayers('', '2023', '', 'Georgia', 'Female');
    }
}
