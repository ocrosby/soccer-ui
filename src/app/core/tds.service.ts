import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Conference } from '../shared/conference';
import { Division } from '../shared/division';
import { MessageService } from './message.service';
import { Organization } from '../shared/organization';
import { School } from '../shared/school';

import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TdsService {
    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {}

    getOrganizations(): Observable<any> {
        return this.http
            .get<Organization[]>(
                environment.apiUrl + '/tds/college/organizations'
            )
            .pipe(catchError(this.handleError));
    }

    getDivisions(): Observable<any> {
        return this.http
            .get<Division[]>(environment.apiUrl + '/tds/college/divisions')
            .pipe(catchError(this.handleError));
    }

    getConferences(gender: string, division: string): Observable<any> {
        return this.http
            .get<Conference[]>(
                environment.apiUrl +
                    '/tds/college/conferences/' +
                    gender +
                    '/' +
                    division
            )
            .pipe(catchError(this.handleError));
    }

    getCommitments(
        gender: string,
        division: string,
        conference: string,
        year: string
    ): Observable<any> {
        return this.http
            .get<School[]>(
                environment.apiUrl +
                    '/tds/college/conference/commits/' +
                    gender +
                    '/' +
                    division +
                    '/' +
                    encodeURI(conference) +
                    '/' +
                    year
            )
            .pipe(catchError(this.handleError));
    }

    getPlayers(
        position: string,
        gradYear: string,
        region: string,
        state: string,
        gender: string
    ): Observable<any> {
        let payload = {
            name: null,
            position: position,
            gradyear: gradYear,
            region: region,
            state: state,
            gender: gender,
        };

        console.log(payload);
        return this.http
            .post<any>(environment.apiUrl + '/tds/players', payload)
            .pipe(catchError(this.handleError));
    }

    /** Log a PlayerService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`PlayerService: ${message}`);
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

        console.log(error);
        return throwError(
            () => new Error('Something bad happened; please try again later.')
        );
    }
}
