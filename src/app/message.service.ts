import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    constructor() {}

    public add(message: string) {
        console.log(message);
    }
}
