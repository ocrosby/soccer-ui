import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { GAClub } from '../shared/club';

import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class GaService {
    constructor(private http: HttpClient) {}

    getClubs(): Observable<any> {
        return this.http
            .get<GAClub[]>(environment.apiUrl + '/ga/clubs')
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
