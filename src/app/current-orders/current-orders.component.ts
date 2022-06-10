import { Component, OnInit, Inject } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../model/order';
import { LogMessageService } from '../log-message.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-current-orders',
    templateUrl: './current-orders.component.html',
    styleUrls: ['./current-orders.component.css'],
})
export class CurrentOrdersComponent implements OnInit {
    constructor(
        public orderService: OrderService,
        private logMessageService: LogMessageService,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    setComplete(order: Order): void {
        order.updateTime();
        order.setCompleted();
        this.logMessageService.addMessage(this.createCompleteOrderMessage(order));
    }

    getAllCurrent(): Order[] {
        let output: Order[] = [];
        this.orderService.getAllCurrent().subscribe((orders) => (output = orders));
        return output;
    }

    createCompleteOrderMessage(order: Order): string {
        return `${order.customerName}'s order has been completed. Date: ${order.year}/${order.month}/${order.date} ${order.hours}:${order.minutes}:${order.seconds}`;
    }

    openDialog(order: Order): void {
        this.dialog.open(DialogCompleteDialog, {
            data: {order: order},
        })
      }
    }


@Component({
    selector: 'complete-order-dialog',
    templateUrl: './complete-order-dialog.html',
    template: 'passed in {{ data.order }}'
  })
  export class DialogCompleteDialog {
      
    constructor(
        public dialogRef: MatDialogRef<DialogCompleteDialog>,
        private logMessageService: LogMessageService,
        @Inject(MAT_DIALOG_DATA) public data: {order: Order},
        ) {}

    setComplete(order: Order): void {
        order.updateTime();
        order.setCompleted();
        this.logMessageService.addMessage(this.createCompleteOrderMessage(order));
    }

    createCompleteOrderMessage(order: Order): string {
        return `${order.customerName}'s order has been completed. Date: ${order.year}/${order.month}/${order.date} ${order.hours}:${order.minutes}:${order.seconds}`;
    }
}