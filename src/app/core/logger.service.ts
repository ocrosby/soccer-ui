import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoggerService {
    constructor() { /* TODO document why this constructor is empty */ }

    log(msg: any) {
        console.log(msg);
    }

    error(msg: any) {
        console.error(msg);
    }

    warn(msg: any) {
        console.warn(msg);
    }
}
