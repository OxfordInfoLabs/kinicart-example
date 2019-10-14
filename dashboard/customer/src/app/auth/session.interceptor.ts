import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { finalize, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class SessionInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        request = request.clone({
            withCredentials: true
        });

        if (!request.url.startsWith('http')) {
            request = request.clone({
                url: environment.backendURL + request.url
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8') });
        }

        return next.handle(request)
            .pipe(
                tap(
                    event => {
                    },
                    error => {
                        if (error instanceof HttpErrorResponse) {
                            return throwError(error);
                        }
                    }
                ),
                finalize(() => {
                })
            );
    }

}
