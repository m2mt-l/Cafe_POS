import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../menu-item.service';
import { MenuItem } from '../model/menuItem';
import { Order } from '../model/order';
import { OrderService } from '../order.service';
import { LogMessageService } from '../log-message.service';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
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
    order$!: Observable<Order>;
    menuItems: MenuItem[] = this.getSubscribeMenuItems();
    index: number = Number(this.route.snapshot.paramMap.get('id')!);
    isSubmitted: boolean = false;

    constructor(
        private menuItemsService: MenuItemService,
        private orderService: OrderService,
        private logMessageService: LogMessageService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.isSubmitted = true;
        this.order$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => this.orderService.get(Number(params.get('id')!) - 1))
        );
        const order: Order = this.getSubscribeOrder();
        if (order === undefined) this.order$ = of(this.newOrder);
        else
            this.total = this.getSubscribeOrder().menuItems.map(
                (menuItem, index) => menuItem * this.menuItems[index].price
            );
        console.log(this.index);
        console.log(order);
    }

    onKeyInputOrder(index: number, inputNumber: string, menuItem: MenuItem): void {
        this.sumOrderTotal(index, Number(inputNumber), menuItem);
        this.setOrderMenuItem(index, Number(inputNumber));
        // console.log(this.orderService.orders);
    }

    sumOrderTotal(index: number, inputNumber: number, menuItem: MenuItem): void {
        const order: Order = this.getSubscribeOrder();
        this.total[index] = order.menuItems[index] * menuItem.price;
    }

    setOrderMenuItem(index: number, inputNumber: number): void {
        const order: Order = this.getSubscribeOrder();
        order.menuItems[index] = inputNumber;
    }

    getTotal(): number {
        if (this.total.length === 0) return 0;
        else return this.total.reduce((total, x) => total + x);
    }

    onKeyInputName(value: string): void {
        const order: Order = this.getSubscribeOrder();
        order.customerName = value;
    }

    clickUpdateOrder(): void {
        const order: Order = this.getSubscribeOrder();
        order.addTotal(this.getTotal());
        if (this.index === 0) {
            order.updateTime();
            this.logMessageService.addMessage(this.createNewOrderMessage(order));
            this.orderService.submitOrder(order);
            this.isSubmitted = false;
        } else {
            order.updateTime();
            this.logMessageService.addMessage(this.createModifyOrderMessage(order));
            this.orderService.orders[this.index - 1] = order;
            this.isSubmitted = false;
        }
    }

    createNewOrderMessage(order: Order): string {
        return `${order.customerName}'s order has been created. Date: ${order.createDateString()} ${order.createTimeString()}`;
    }

    createModifyOrderMessage(order: Order): string {
        return `${order.customerName}'s order has been modified. Date: ${order.createDateString()} ${order.createTimeString()}`;
    }

    isAbleToSubmitOrder(): boolean {
        const order: Order = this.getSubscribeOrder();

        return order.customerName != '' && this.getTotal() > 0 && this.isValidNumberOfOrder() && this.isSubmitted;
    }

    getSubscribeOrder(): Order {
        let subscribeOrder: any;
        this.order$.subscribe((order) => (subscribeOrder = order));
        return subscribeOrder;
    }

    getSubscribeMenuItems(): MenuItem[] {
        let menuItems: any;
        this.menuItemsService.getAll().subscribe((items) => (menuItems = items));
        return menuItems;
    }

    isValidNumberOfOrder(): boolean {
        const order: Order = this.getSubscribeOrder();

        for (let menuItem of order.menuItems) {
            if (menuItem === undefined) return false;
            if (menuItem < 0) return false;
        }
        return true;
    }
}
