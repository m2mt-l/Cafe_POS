import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LogMessageService {
    messages: string[] = [];
    //FIX delete
    testMessage: string = 'This is from log message service.';

    constructor() { }

    addMessage(message: string) {
        this.messages.push(message);
    }

    clearMessage() {
        this.messages = [];
    }
}
