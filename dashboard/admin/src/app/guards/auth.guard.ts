import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'ng-kiniauth';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService,
                private router: Router) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.authService.getLoggedInUser().then(user => {
            if (user) {
                return true;
            }
            this.router.navigate(['/login'])
        }).catch(error => {
            if (error.status === 403) {
                this.router.navigate(['/login'])
            }
            return false;
        });
    }

}
