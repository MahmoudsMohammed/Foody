import { Routes } from '@angular/router';
import { AuthenticatedComponent } from './authenticated.component';

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
    ],
  },
  {
    path: '**',
    redirectTo: 'all',
    pathMatch: 'full',
  },
];
