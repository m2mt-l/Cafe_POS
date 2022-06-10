import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../model/order';
import { LogMessageService } from '../log-message.service';

@Component({
    selector: 'app-current-orders',
    templateUrl: './current-orders.component.html',
    styleUrls: ['./current-orders.component.css'],
})
export class CurrentOrdersComponent implements OnInit {
    constructor(public orderService: OrderService, private logMessageService: LogMessageService) {}

    ngOnInit(): void {}

    setComplete(order: Order): void {
        order.updateTime();
        order.setCompleted();
    }

    getAllCurrent(): Order[] {
        let output: Order[] = [];
        this.orderService.getAllCurrent().subscribe(orders => output = orders);
        return output;
    }
}
