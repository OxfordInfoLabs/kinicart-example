import { Component, OnDestroy, OnInit } from '@angular/core';
import { SideMenuService } from '../../components/side-menu/side-menu.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit, OnDestroy {

    constructor(private sideMenuService: SideMenuService) {
    }

    ngOnInit() {
      this.sideMenuService.activeMenus.next([SideMenuService.PRODUCTS_MENU]);
    }

    ngOnDestroy(): void {
        this.sideMenuService.activeMenus.next([]);
    }
}
