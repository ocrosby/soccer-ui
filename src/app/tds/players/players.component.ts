import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/message.service';
import { TdsService } from 'src/app/core/tds.service';
import { Player } from 'src/app/shared/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
    overlay: boolean = false;

    players: Player[] = [];

    selectedPosition: string;
    selectedGradYear: string;
    selectedRegion: string;
    selectedState: string;
    selectedGender: string;

    regions: string[] = [
        "Florida",
        "Great Lakes",
        "Heartland",
        "International",
        "Mid Atlantic",
        "Midwest",
        "New Jersey",
        "New York",
        "Northeast",
        "Northern California & Hawaii",
        "Pacific Northwest",
        "Pennsylvania",
        "Rocky Mountains & Southwest",
        "South",
        "South Atlantic",
        "Southern California",
        "Texas"
    ];

    states: string[] = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'International',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];

    displayedColumns: string[] = [
        'name',
        'position',
        'club',
        'highSchool',
        'rating',
        'year',
        'state',
        'commitment',
    ];

    constructor(
        private tdsService: TdsService,
        private messageService: MessageService
    ) {
        this.selectedPosition = 'All';
        this.selectedGradYear = '2023';
        this.selectedRegion = 'All';
        this.selectedState = 'Georgia';
        this.selectedGender = 'Female';
    }

    ngOnInit(): void {}

    onSearch(): void {
        this.overlay = true;

        this.tdsService
            .getPlayers(
                this.selectedPosition,
                this.selectedGradYear,
                this.selectedRegion,
                this.selectedState,
                this.selectedGender
            )
            .subscribe((data: any[]) => {
                this.players = data;
                this.overlay = false;
            });
    }

    onPosition() {

    }
}
