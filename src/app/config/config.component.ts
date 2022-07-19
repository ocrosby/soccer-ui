import { Component, OnInit } from '@angular/core';
import { Config } from '../shared/config';
import { ConfigService } from '../core/config.service';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
    config: Config | undefined;

    constructor(private configService: ConfigService) {}

    ngOnInit(): void {}

    showConfig() {
        this.configService
            .getConfig()
            // clone the data object, using its known Config shape
            .subscribe((data: Config) => (this.config = { ...data }));
    }
}
