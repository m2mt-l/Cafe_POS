import { Injectable } from '@angular/core';
import { Order } from './model/order';
import { MenuItem } from './model/menuItem';
import { MenuItemService } from './menu-item.service';
@Injectable({
    providedIn: 'root',
})
export class OrderService {
    orders: Order[] = [];

    constructor() {}

    get(index: number): Order {
        return this.orders[index];
    }

    // getAll()

    getAllCurrent(): Order[] {
        return this.orders;
    }

    getAllCompleted(): Order[] {
        const completedOrders: Order[] = this.orders.filter(x => x.isCompleted);
        return completedOrders;
    }

    created(customerName: string, menuItemService: MenuItemService) {
        const newOrder: Order = new Order(customerName, menuItemService);
        this.orders.push(newOrder);
        console.log(this.orders);
        return newOrder;
    }
}
