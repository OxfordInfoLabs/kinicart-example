import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AccountSummaryComponent } from './views/account-summary/account-summary.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProductsComponent } from './views/products/products.component';
import { SettingsComponent } from './views/settings/settings.component';
import { FeaturesComponent } from './views/products/features/features.component';
import { PlansComponent } from './views/products/plans/plans.component';
import { AddOnsComponent } from './views/products/add-ons/add-ons.component';
import { OverviewComponent } from './views/overview/overview.component';
import { AddressBookComponent } from './views/address-book/address-book.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: OverviewComponent
            }
        ]
    },
    {
        path: 'products',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: ProductsComponent
            },
            {
                path: 'features/:identifier',
                component: FeaturesComponent,
                data: {
                    title: 'Features'
                }
            },
            {
                path: 'plans/:identifier',
                component: PlansComponent,
                data: {
                    title: 'Plans'
                }
            },
            {
                path: 'add-ons/:identifier',
                component: AddOnsComponent,
                data: {
                    title: 'Add Ons'
                }
            }
        ],
        canActivate: [AuthGuard],
        data: {
            title: 'Products'
        }
    },
    {
        path: 'settings',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: SettingsComponent
            }
        ],
        canActivate: [AuthGuard],
        data: {
            title: 'Settings'
        }
    },
    {
        path: 'account-summary',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: AccountSummaryComponent
            },
            {
                path: 'address-book',
                component: AddressBookComponent,
                data: {
                    title: 'Address Book'
                }
            },
            {
                path: 'contact-details',
                component: ContactDetailsComponent,
                data: {
                    title: 'Contact Details'
                }
            },
            {
                path: 'contact-details/:contactId',
                component: ContactDetailsComponent,
                data: {
                    title: 'Contact Details'
                }
            }
        ],
        canActivate: [AuthGuard],
        data: {
            title: 'My Account'
        }
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
