import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthenticationService } from 'ng-kiniauth';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, OnDestroy {

    public mobileQuery: MediaQueryList;
    public _mobileQueryListener: () => void;
    public loggedIn: boolean;

    private authUserSub: Subscription;

    constructor(private changeDetectorRef: ChangeDetectorRef,
                private media: MediaMatcher,
                private authService: AuthenticationService,
                private router: Router) {

        this.mobileQuery = media.matchMedia('(max-width: 800px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

    }

    ngOnInit(): void {
        // @ts-ignore
        this.authUserSub = this.authService.authUser.subscribe(user => {
            this.loggedIn = !!user;
        });
    }

    ngOnDestroy(): void {
        this.authUserSub.unsubscribe();
    }

    public logout() {
        this.authService.logout().then(() => {
            this.router.navigate(['/login']);
        });
    }
}
