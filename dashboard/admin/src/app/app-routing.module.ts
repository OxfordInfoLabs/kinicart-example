import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSecurityComponent } from "./login-security/login-security.component";

const routes: Routes = [
    {
        path: 'login-security',
        component: LoginSecurityComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
