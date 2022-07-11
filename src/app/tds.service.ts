import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map, throwError } from 'rxjs';
import { Conference } from './conference';
import { ConfigService } from './config.service';
import { Division } from './division';
import { MessageService } from './message.service';
import { Organization } from './organization';
import { Player } from './player';
import { School } from './school';

@Injectable({
    providedIn: 'root',
})
export class TdsService {
    private api = "https://soccer-api.happyocean-04c34fb4.eastus2.azurecontainerapps.io/api";

    constructor(private http: HttpClient, private configService: ConfigService, private messageService: MessageService) {}

    getOrganizations(): Observable<any> {
        return this.http.get<Organization[]>(this.api + "/tds/college/organizations")
            .pipe(
                catchError(this.handleError)
            )
    }

    getDivisions(): Observable<any> {
        return this.http.get<Division[]>(this.api + "/tds/college/divisions")
            .pipe(
                catchError(this.handleError)
            )
    }

    getConferences(gender: string, division: string): Observable<any> {
        return this.http.get<Conference[]>(this.api + "/tds/college/conferences/" + gender + "/" + division)
            .pipe(
                catchError(this.handleError)
            )
    }

    getCommitments(gender: string, division: string, conference: string, year: string): Observable<any> {
        return this.http.get<School[]>(this.api + "/tds/college/conference/commits/" + gender +"/" + division + "/" + encodeURI(conference) + "/" + year)
            .pipe(
                catchError(this.handleError)
            )
    }

    getPlayers(
        position: string,
        gradYear: string,
        region: string,
        state: string,
        gender: string
    ): Observable<any> {
        return this.http
            .post<Player[]>(this.api + "/tds/players", {
                position: position,
                'grad-year': gradYear,
                region: region,
                state: state,
                gender: gender,
            })
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
            `body was: ${error.error}`);
        }
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }
}
