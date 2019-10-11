import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthenticationService } from 'ng-kiniauth';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {

    public mobileQuery: MediaQueryList;
    public _mobileQueryListener: () => void;
    public breadcrumbs: any[] = [];

    private routerSub: Subscription;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private changeDetectorRef: ChangeDetectorRef,
                private media: MediaMatcher,
                private authService: AuthenticationService) {

        this.mobileQuery = media.matchMedia('(max-width: 800px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

        this.routerSub = this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                this.buildBreadcrumbs();
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.routerSub.unsubscribe();
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    public signOut() {
        this.authService.logout().then(() => {
            this.router.navigate(['/login']);
        });
    }

    private buildBreadcrumbs() {
        this.breadcrumbs = [];
        const breadcrumbs = {};
        let url = '';
        let currentRoute = this.route.root;
        do {
            const childrenRoutes = currentRoute.children;
            currentRoute = null;
            childrenRoutes.forEach(childRoute => {
                if (childRoute.outlet === 'primary') {
                    const routeSnapshot = childRoute.snapshot;
                    url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                    if (childRoute.snapshot.data.title) {
                        breadcrumbs[childRoute.snapshot.data.title] = {
                            label: childRoute.snapshot.data,
                            url
                        };
                    }
                    currentRoute = childRoute;
                }
            });
        } while (currentRoute);
        this.breadcrumbs = _.values(breadcrumbs);
    }
}
