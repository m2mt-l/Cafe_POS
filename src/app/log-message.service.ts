import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LogMessageService {
    testMessage: string = 'This is from log message service.';
    
    constructor() { }
}
