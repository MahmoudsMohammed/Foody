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
      {
        path: 'meal/:id',
        loadComponent: () =>
          import('./features/meal-details/meal-details.component').then(
            (m) => m.MealDetailsComponent
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
