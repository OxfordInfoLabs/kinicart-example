import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SideMenuService {

    public static PRODUCTS_MENU = 'products';

    public activeMenus: BehaviorSubject<string[]> = new BehaviorSubject([]);

    constructor() {
    }
}
