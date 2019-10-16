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
import { AccountSummaryComponent } from './views/account-summary/account-summary.component';
import { LoginComponent } from './views/login/login.component';
import { SessionInterceptor } from './auth/session.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgKiniAuthModule } from 'ng-kiniauth';
import { environment } from '../environments/environment';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ProductsComponent } from './views/products/products.component';
import { SettingsComponent } from './views/settings/settings.component';
import { ProductsMenuComponent } from './components/side-menu/menus/products-menu/products-menu.component';
import { FeaturesComponent } from './views/products/features/features.component';
import { AddOnsComponent } from './views/products/add-ons/add-ons.component';
import { PlansComponent } from './views/products/plans/plans.component';
import { OverviewComponent } from './views/overview/overview.component';
import { AccountMenuComponent } from './components/side-menu/menus/account-menu/account-menu.component';
import { AddressBookComponent } from './views/address-book/address-book.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { PaymentMethodsComponent } from './views/payment-methods/payment-methods.component';
import { NgKinicartModule } from 'ng-kinicart';
import { OrderHistoryComponent } from './views/order-history/order-history.component';


@NgModule({
    declarations: [
        AppComponent,
        AccountSummaryComponent,
        LoginComponent,
        DashboardComponent,
        SideMenuComponent,
        ProductsComponent,
        SettingsComponent,
        ProductsMenuComponent,
        FeaturesComponent,
        AddOnsComponent,
        PlansComponent,
        OverviewComponent,
        AccountMenuComponent,
        AddressBookComponent,
        ContactDetailsComponent,
        PaymentMethodsComponent,
        OrderHistoryComponent
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
        MatMenuModule,
        NgKiniAuthModule.forRoot({
            guestHttpURL: `${environment.backendURL}/guest`,
            accessHttpURL: `${environment.backendURL}/customer`
        }),
        NgKinicartModule.forRoot({
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
