import { Routes } from '@angular/router';
import { AuthenticatedComponent } from './authenticated.component';
import { AllMealsComponent } from './features/all-meals/all-meals.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {
        path: 'all',
        loadComponent: () =>
          import('./features/all-meals/all-meals.component').then(
            (m) => m.AllMealsComponent
          ),
      },
      {
        path: 'all/:search',
        loadComponent: () =>
          import('./features/all-meals/all-meals.component').then(
            (m) => m.AllMealsComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'all',
    pathMatch: 'full',
  },
];
