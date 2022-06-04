import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../menu-item.service';
import { MenuItem } from '../model/menuItem';
import { Order } from '../model/order';
import { OrderService } from '../order.service';
import { FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-add-or-update-order',
    templateUrl: './add-or-update-order.component.html',
    styleUrls: ['./add-or-update-order.component.css'],
})
export class AddOrUpdateOrderComponent implements OnInit {
    customerName: string = '';
    total: number[] = [];
    newOrder: Order = this.orderService.created(this.customerName, this.menuItemsService);
    orderNumber: FormControl = new FormControl('', [Validators.required, Validators.min(1)]);

    constructor(private menuItemsService: MenuItemService, private orderService: OrderService) {}

    menuItems: MenuItem[] = this.menuItemsService.getAll();
    ngOnInit(): void {}

    onKeyInputOrder(index: number, inputNumber: string, menuItem: MenuItem): void {
        this.sumOrderTotal(index, Number(inputNumber), menuItem);
        this.setOrderMenuItem(index, Number(inputNumber));
        // console.log(this.orderService.orders);
    }

    sumOrderTotal(index: number, inputNumber: number, menuItem: MenuItem): void {
        this.total[index] = inputNumber * menuItem.price;
    }

    setOrderMenuItem(index: number, inputNumber: number): void {
        this.newOrder.menuItems[index] = inputNumber;
    }

    getTotal(): number {
        if (this.total.length === 0) return 0;
        else return this.total.reduce((total, x) => total + x);
    }

    onKeyInputName(value: string): void {
        this.newOrder.customerName = value;
    }

    clickUpdateOrder(): void {
        this.newOrder.addTotal(this.getTotal());
        this.orderService.submitOrder(this.newOrder);
    }

    isAbleToSubmitOrder(): boolean {
        return (
            this.newOrder.customerName != '' && this.getTotal() > 0 && this.isValidNumberOfOrder()
        );
    }

    isValidNumberOfOrder(): boolean {
        for (let menuItem of this.newOrder.menuItems) {
            if (menuItem < 0) return false;
        }
        return true;
    }

    getOrderNumberErrorMessage(): string {
        if (this.orderNumber.hasError('required')) {
            return 'The number of order is required.';
        } else {
            return this.orderNumber.hasError('min') ? 'The minimum number is 1.' : '';
        }
    }
}
