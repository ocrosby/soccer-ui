import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MessageService } from './message.service';
import { Player } from './player';

@Injectable({
    providedIn: 'root',
})
export class TdsService {
    private playersUrl =
        'https://soccer-api.happyocean-04c34fb4.eastus2.azurecontainerapps.io/api/tds/players'; // URL to web api

    constructor(private http: HttpClient, private messageService: MessageService) {}

    getPlayers(
        position: string,
        gradYear: string,
        region: string,
        state: string,
        gender: string
    ): Observable<Player[]> {
        return this.http
            .post<Player[]>(this.playersUrl, {
                position: position,
                'grad-year': gradYear,
                region: region,
                state: state,
                gender: gender,
            })
            .pipe(catchError(this.handleError<Player[]>('getPlayers', [])));
    }

    /** Log a PlayerService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`PlayerService: ${message}`);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
