import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
}, {
    path: 'casier',
    loadComponent: () => import('./casier/casier.component').then(c => c.CasierComponent)
}, {
    path: 'add-casier',
    loadComponent: () => import('./add-casier/add-casier.component').then(c => c.AddCasierComponent)
}];
