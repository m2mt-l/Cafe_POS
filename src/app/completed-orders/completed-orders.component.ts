import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
@Component({
    selector: 'app-completed-orders',
    templateUrl: './completed-orders.component.html',
    styleUrls: ['./completed-orders.component.css'],
})
export class CompletedOrdersComponent implements OnInit {
    constructor(public orderService: OrderService) {}

    ngOnInit(): void {}
}
