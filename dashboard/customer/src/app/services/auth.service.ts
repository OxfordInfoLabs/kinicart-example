import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { KinibindRequestService } from 'ng-kinibind';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public authUser: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private kbRequest: KinibindRequestService) {
    }

    public getLoggedInUser(): any {
        return this.kbRequest.makeGetRequest('http://localhost:5000/guest/auth').toPromise().then(res => {
            this.setSessionUser(res.loggedInUser);
            return res.loggedInUser;
        });
    }

    public login(username: string, password: string) {
        const request = `http://localhost:5000/guest/auth/login?emailAddress=${username}&password=${password}`;
        return this.kbRequest.makeGetRequest(request).toPromise().then((user: any) => {

            if (user.step === '2FA') {
                sessionStorage.setItem('pendingLoginSession', user.session);
                return user;
            } else {
                return this.setSessionUser(user);
            }
        });
    }

    public authenticateTwoFactor(code) {
        const url = `http://localhost:5000/guest/auth/twoFactor?code=${code}`;
        return this.kbRequest.makeGetRequest(url).toPromise()
            .then(user => {
                sessionStorage.removeItem('pendingLoginSession');
                return this.setSessionUser(user);
            });
    }

    public logout() {
        this.authUser.next(null);
        sessionStorage.clear();
        return this.kbRequest.makeGetRequest('http://localhost:5000/guest/auth/logout').toPromise();
    }

    public setSessionUser(user) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        this.authUser.next(user);
        return user;
    }

}
