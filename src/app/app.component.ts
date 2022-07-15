import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'SoccerHub';
    public isAuthenticated = false;

    panelOpenState = false;

    public logout(): void {
        // todo
    }
}
