import { MenuItemService } from '../menu-item.service';

export class Order {
    customerName: string = '';
    menuItems: number[] = this.setDefaultMenuItems();

    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;
    isCompleted: boolean = false;

    constructor(customerName: string, private menuItemService: MenuItemService){
        this.updateTime();
    }

    setDefaultMenuItems(): number[] {
        let result: number[] = [];
        const menuItemsLength: number = this.menuItemService.getAll().length;
        for (let i: number = 0; i < menuItemsLength; i++){
            result.push(0);
        }
        return result;
    }

    setCompleted(): void {
        this.isCompleted = true;
    }

    addItem(index: number): void {
        if(index < this.menuItems.length) this.menuItems[index]++;
        else return;
    }

    removeItem(index : number): void {
        if(index < this.menuItems.length) this.menuItems[index]--;
    }

    updateTime(): void {
        const date: Date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
    }
    
}