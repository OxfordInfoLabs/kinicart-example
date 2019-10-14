import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../../components/side-menu/side-menu.service';

@Component({
    selector: 'app-account-summary',
    templateUrl: './account-summary.component.html',
    styleUrls: ['./account-summary.component.sass']
})
export class AccountSummaryComponent implements OnInit {

    constructor(private sideMenuService: SideMenuService) {
    }

    ngOnInit() {
        this.sideMenuService.activeMenus.next([SideMenuService.ACCOUNT_MENU]);
    }

}
