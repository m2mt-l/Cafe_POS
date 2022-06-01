import { Injectable } from '@angular/core';
import { MenuItem } from './model/menuItem';
import { MENUITEMS } from './data/validMenuItems';
@Injectable({
    providedIn: 'root',
})
export class MenuItemService {
    constructor() {}

    get(index: number): MenuItem | null{
        const menuItems = this.getAll();
        if(index <= menuItems.length - 1) return menuItems[index];
        else return null;
    }

    getAll(): MenuItem[] {
        return MENUITEMS;
    }
}
