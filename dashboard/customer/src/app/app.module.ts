import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgKinicartModule } from 'ng-kinicart';
import { AccountSummaryComponent } from './views/account-summary/account-summary.component';
import { LoginComponent } from './views/login/login.component';

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
        NgKinicartModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
