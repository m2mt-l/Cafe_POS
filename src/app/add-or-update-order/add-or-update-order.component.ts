import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../menu-item.service';
import { MenuItem } from '../model/menuItem';
@Component({
    selector: 'app-add-or-update-order',
    templateUrl: './add-or-update-order.component.html',
    styleUrls: ['./add-or-update-order.component.css'],
})
export class AddOrUpdateOrderComponent implements OnInit {
    customerName: string = '';
    total: number[] = [];
    
    constructor(private menuItemsService: MenuItemService) {}

    menuItems: MenuItem[] = this.menuItemsService.getAll();
    ngOnInit(): void {}

    sumOrderTotal(index: number, inputNumber: string, menuItem: MenuItem): void {
        this.total[index] = Number(inputNumber) * menuItem.price;
    }

    getTotal(): number {
        if(this.total.length === 0) return 0;
        else return this.total.reduce((total, x) => total + x);
    }
}
