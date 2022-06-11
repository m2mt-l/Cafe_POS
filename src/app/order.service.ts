import { Injectable } from '@angular/core';
import { Order } from './model/order';
import { MenuItemService } from './menu-item.service';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class OrderService {
    orders: Order[] = [];

    constructor() {}

    get(index: number): Observable<Order> {
        return of(this.orders[index]);
    }

    getAllCurrent(): Observable<Order[]> {
        return of(this.orders);
    }

    getAllCompleted(): Order[] {
        const completedOrders: Order[] = this.orders.filter((x) => x.isCompleted);
        return completedOrders;
    }

    created(customerName: string, menuItemService: MenuItemService): Order {
        const newOrder: Order = new Order(customerName, menuItemService);
        return newOrder;
    }

    submitOrder(newOrder: Order): void {
        this.orders.push(newOrder);
    }
}
