import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { OrganizationComponent } from './organization.component';
import { OrganizationDetailComponent } from './organization-detail.component';
import { OrganizationPopupComponent } from './organization-dialog.component';
import { OrganizationDeletePopupComponent } from './organization-delete-dialog.component';

export const organizationRoute: Routes = [
    {
        path: 'organization',
        component: OrganizationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'myApp.organization.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'organization/:id',
        component: OrganizationDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'myApp.organization.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const organizationPopupRoute: Routes = [
    {
        path: 'organization-new',
        component: OrganizationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'myApp.organization.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'organization/:id/edit',
        component: OrganizationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'myApp.organization.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'organization/:id/delete',
        component: OrganizationDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'myApp.organization.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
