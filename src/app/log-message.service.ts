import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LogMessageService {
    messages: string[] = [];

    constructor() {}

    addMessage(message: string) {
        this.messages.push(message);
    }

    clearMessage() {
        this.messages = [];
    }
}
