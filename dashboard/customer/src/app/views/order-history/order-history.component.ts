import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../../components/side-menu/side-menu.service';

@Component({
    selector: 'app-order-history',
    templateUrl: './order-history.component.html',
    styleUrls: ['./order-history.component.sass']
})
export class OrderHistoryComponent implements OnInit {

    constructor(private sideMenuService: SideMenuService) {
    }

    ngOnInit() {
        this.sideMenuService.activeMenus.next([SideMenuService.ACCOUNT_MENU]);
    }

}
