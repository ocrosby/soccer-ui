import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ECNLClub } from '../shared/club';

import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EcnlService {
    constructor(private http: HttpClient) {}

    getClubs(): Observable<any> {
        return this.http
            .get<ECNLClub[]>(environment.apiUrl + '/ecnl/clubs')
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
