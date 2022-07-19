import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

import { environment } from './../../environments/environment';
import { LoggerService } from './logger.service';
import { Player, Standing } from '../shared/nwsl';

@Injectable({
    providedIn: 'root',
})
export class NwslService {
    constructor(private http: HttpClient, private logger: LoggerService) {}

    getPlayers(): Observable<any> {
        return this.http
            .get<Player[]>(environment.apiUrl + '/nwsl/players')
            .pipe(retry(1), catchError(this.handleError));
    }

    getStandings(): Observable<any> {
        return this.http
            .get<Standing[]>(environment.apiUrl + '/nwsl/standings')
            .pipe(retry(1), catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
            this.logger.error('An error occurred: ' + error.error.message);
        } else {
            this.logger.error(
                `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
            );
        }

        return throwError(
            () => new Error('Something bad happened; please try again later.')
        );
    }
}
