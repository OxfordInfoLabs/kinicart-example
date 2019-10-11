import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-menu',
    templateUrl: './products-menu.component.html',
    styleUrls: ['./products-menu.component.sass']
})
export class ProductsMenuComponent implements OnInit {

    public showVirtual = false;
    public showEmail = false;

    constructor() {
    }

    ngOnInit() {
    }

}
