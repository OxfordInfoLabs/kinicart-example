import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

    public mobileQuery: MediaQueryList;
    public _mobileQueryListener: () => void;
    public loggedInUser: any;

    constructor(private changeDetectorRef: ChangeDetectorRef,
                private media: MediaMatcher,
                private authService: AuthService) {

        this.mobileQuery = media.matchMedia('(max-width: 800px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

    }

    ngOnInit(): void {
        this.authService.authUser.subscribe(user => {
            this.loggedInUser = user;
        });
    }
}
