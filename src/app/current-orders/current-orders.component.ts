import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
    selector: 'app-current-orders',
    templateUrl: './current-orders.component.html',
    styleUrls: ['./current-orders.component.css'],
})
export class CurrentOrdersComponent implements OnInit {
    constructor(public orderService: OrderService) {}

    ngOnInit(): void {}
}
