import { Injectable } from '@angular/core';
import { MenuItem } from './model/menuItem';
import { MENUITEMS } from './data/validMenuItems';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class MenuItemService {
    constructor() {}

    get(index: number): MenuItem | null {
        let menuItems: any;
        this.getAll().subscribe((items) => (menuItems = items));
        if (index <= menuItems.length - 1) return menuItems[index];
        else return null;
    }

    getAll(): Observable<MenuItem[]> {
        return of(MENUITEMS);
    }
}
