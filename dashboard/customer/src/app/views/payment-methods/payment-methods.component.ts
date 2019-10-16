import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../../components/side-menu/side-menu.service';

@Component({
    selector: 'app-payment-methods',
    templateUrl: './payment-methods.component.html',
    styleUrls: ['./payment-methods.component.sass']
})
export class PaymentMethodsComponent implements OnInit {

    constructor(private sideMenuService: SideMenuService) {
    }

    ngOnInit() {
        this.sideMenuService.activeMenus.next([SideMenuService.ACCOUNT_MENU]);
    }

}
