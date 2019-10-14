import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideMenuService } from '../../components/side-menu/side-menu.service';

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit {

    public contactId: number = null;

    constructor(private route: ActivatedRoute,
                private sideMenuService: SideMenuService) {
    }

    ngOnInit() {
        this.sideMenuService.activeMenus.next([SideMenuService.ACCOUNT_MENU]);
        if (this.route.snapshot.params.contactId) {
            this.contactId = this.route.snapshot.params.contactId;
        }
    }

}
