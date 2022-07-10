import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { RPIRanking } from './rpi-rankings/rpi-rank';

@Injectable({
    providedIn: 'root',
})
export class NcaaService {
    private api = "https://soccer-api.happyocean-04c34fb4.eastus2.azurecontainerapps.io/api";

    constructor(private http: HttpClient) {}

    getRpiRankings(): Observable<any> {
        return this.http.get<RPIRanking[]>(this.api + "/ncaa/rankings/di/rpi")
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
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
