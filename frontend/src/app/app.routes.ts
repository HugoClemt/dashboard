import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
    canActivate: [AuthGuard]
}, {
    path: 'casier',
    loadComponent: () => import('./casier/casier.component').then(c => c.CasierComponent),
    canActivate: [AuthGuard]
}, {
    path: 'add-casier',
    loadComponent: () => import('./add-casier/add-casier.component').then(c => c.AddCasierComponent),
    canActivate: [AuthGuard]
}, {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
}];
