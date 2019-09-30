import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { LoginComponent } from './login/login.component';
import { SessionInterceptor } from './session.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgKiniAuthModule } from 'ng-kiniauth';
import { environment } from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent,
        AccountSummaryComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatSidenavModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        NgKiniAuthModule.forRoot({
            guestHttpURL: `${environment.backendURL}/guest`,
            accessHttpURL: `${environment.backendURL}/customer`
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SessionInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
