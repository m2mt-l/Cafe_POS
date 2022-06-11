import { MenuItemService } from '../menu-item.service';
import { MenuItem } from './menuItem';

export class Order {
    customerName: string = '';
    menuItems: number[] = this.setDefaultMenuItems();
    totalOrder: number = 0;

    year: number = 0;
    month: number = 0;
    date: number = 0;
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;
    isCompleted: boolean = false;

    constructor(customerName: string, private menuItemService: MenuItemService) {
        this.customerName = customerName;
        this.updateTime();
    }

    setDefaultMenuItems(): number[] {
        let result: number[] = [];
        let menuItems: any;
        this.menuItemService.getAll().subscribe((items) => (menuItems = items));
        const menuItemsLength: number = menuItems.length;
        for (let i: number = 0; i < menuItemsLength; i++) {
            result.push(0);
        }
        return result;
    }

    setCompleted(): void {
        this.isCompleted = true;
    }

    addItem(index: number): void {
        if (index < this.menuItems.length) this.menuItems[index]++;
        else return;
    }

    addTotal(total: number): void {
        this.totalOrder = total;
    }

    removeItem(index: number): void {
        if (index < this.menuItems.length) this.menuItems[index]--;
    }

    updateTime(): void {
        const date: Date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.date = date.getDate();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
    }

    createDateString(): string {
        return `${this.year}/${this.month}/${this.date}`;
    }

    createTimeString(): string {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }
}
