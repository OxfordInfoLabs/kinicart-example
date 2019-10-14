import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../../components/side-menu/side-menu.service';

@Component({
    selector: 'app-address-book',
    templateUrl: './address-book.component.html',
    styleUrls: ['./address-book.component.sass']
})
export class AddressBookComponent implements OnInit {

    constructor(private sideMenuService: SideMenuService) {
    }

    ngOnInit() {
        this.sideMenuService.activeMenus.next([SideMenuService.ACCOUNT_MENU]);
    }

}
