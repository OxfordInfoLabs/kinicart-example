import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'account-summary',
        pathMatch: 'full'
    },
    {
        path: 'account-summary',
        component: AccountSummaryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
