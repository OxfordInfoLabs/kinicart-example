import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SideMenuService } from './side-menu.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.sass'],
    encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent implements OnInit, OnDestroy {

    public sideMenus = [];
    public SideMenuService = SideMenuService;

    private sideMenuSub: Subscription;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private sideMenuService: SideMenuService) {
    }

    ngOnInit() {
        this.sideMenuSub = this.sideMenuService.activeMenus.subscribe(menus => {
            this.sideMenus = _.isArray(menus) ? menus : [menus];
        });
    }

    ngOnDestroy(): void {
        this.sideMenuSub.unsubscribe();
    }

}
