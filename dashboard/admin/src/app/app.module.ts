import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgKinicartModule } from 'ng-kinicart';
import { LoginSecurityComponent } from './login-security/login-security.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginSecurityComponent
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
