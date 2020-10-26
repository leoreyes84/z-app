import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'home/:id', component: HomeComponent },
    { path: 'portfolio/:id', component: PortfolioComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    
];