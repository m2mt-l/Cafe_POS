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
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    getAllCurrent(): Order[] {
        let output: Order[] = [];
        this.orderService.getAllCurrent().subscribe((orders) => (output = orders));
        return output;
    }

    openDialog(order: Order): void {
        this.dialog.open(CompleteDialog, {
            width: '300px',
            height: '150px',
            data: { order: order },
        });
    }

    isOrderCompeted(order: Order): boolean {
        return order.isCompleted;
    }
}

@Component({
    selector: 'complete-order-dialog',
    templateUrl: './complete-order-dialog.html',
    styleUrls: ['./complete-order-dialog.css'],
    template: 'passed in {{ data.order }}',
})
export class CompleteDialog {
    constructor(
        public dialogRef: MatDialogRef<CompleteDialog>,
        private logMessageService: LogMessageService,
        @Inject(MAT_DIALOG_DATA) public data: { order: Order }
    ) {}

    setComplete(order: Order): void {
        order.updateTime();
        order.setCompleted();
        this.logMessageService.addMessage(this.createCompleteOrderMessage(order));
    }

    createCompleteOrderMessage(order: Order): string {
        return `${order.customerName}'s order has been completed. Date: ${order.createDateString()} ${order.createTimeString()}`;
    }
}
