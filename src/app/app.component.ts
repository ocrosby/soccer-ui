import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from './core/logger.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'SoccerHub';
    public isAuthenticated = false;

    panelOpenState = false;

    constructor(private router: Router, private logger: LoggerService) {

    }

    isRouteActive(path: string): boolean {
        if (!path) {
            return false;
        }

        if (path === this.router.url) {
            return true;
        }

        return false;
    }

    public logout(): void {
        // todo
    }
}
