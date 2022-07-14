import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { RPIRanking } from './rpi-rankings/rpi-rank';

import { environment } from './../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class NcaaService {
    constructor(private http: HttpClient) {}

    getRpiRankings(): Observable<any> {
        return this.http
            .get<RPIRanking[]>(environment.apiUrl + '/ncaa/rankings/di/rpi')
            .pipe(retry(1), catchError(this.handleError));
    }

    getUscRankings(division: string): Observable<any> {
        return this.http
            .get<RPIRanking[]>(
                environment.apiUrl +
                    '/ncaa/rankings/' +
                    division +
                    '/united-soccer-coaches'
            )
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
