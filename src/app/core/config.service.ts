import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Config } from '../shared/config';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    configUrl = 'assets/config.json';

    constructor(private http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `,
                error.error
            );
        }
        // Return an observable with a user-facing error message.
        return throwError(
            () => new Error('Something bad happened; please try again later.')
        );
    }

    getConfig() {
        return this.http.get<Config>(this.configUrl).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
}
