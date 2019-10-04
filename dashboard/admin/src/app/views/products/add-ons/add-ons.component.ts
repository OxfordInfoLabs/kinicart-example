import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideMenuService } from '../../../components/side-menu/side-menu.service';

@Component({
    selector: 'app-add-ons',
    templateUrl: './add-ons.component.html',
    styleUrls: ['./add-ons.component.sass']
})
export class AddOnsComponent implements OnInit {

    public identifier: string;

    constructor(private route: ActivatedRoute,
                private sideMenuService: SideMenuService) {
    }

    ngOnInit() {
        this.sideMenuService.activeMenus.next([SideMenuService.PRODUCTS_MENU]);
        this.identifier = this.route.snapshot.params.identifier;
    }

}
