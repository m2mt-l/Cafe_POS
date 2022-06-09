import { Component } from '@angular/core';
import { LogMessageService } from './log-message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Desmond Coffee Shop';

    constructor(private logMessageService: LogMessageService) {}

    getLogMessage(): string {
        //FIX
        return this.logMessageService.testMessage;
    }
}
