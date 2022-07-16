import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

import { environment } from './../environments/environment';
import { Player } from './nwsl';

@Injectable({
    providedIn: 'root',
})
export class NwslService {
    constructor(private http: HttpClient) {}

    getPlayers(): Observable<any> {
        return this.http
            .get<Player[]>(environment.apiUrl + '/nwsl/players')
            .pipe(retry(1), catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
            );
        }
        return throwError(
            () => new Error('Something bad happened; please try again later.')
        );
    }
}
