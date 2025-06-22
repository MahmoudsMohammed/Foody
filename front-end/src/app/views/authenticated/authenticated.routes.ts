import { Routes } from '@angular/router';
import { AuthenticatedComponent } from './authenticated.component';
import { mealDataResolver } from './features/meal-details/resolvers/meal-data.resolver';

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
        resolve: { meal: mealDataResolver },
        loadComponent: () =>
          import('./features/meal-details/meal-details.component').then(
            (m) => m.MealDetailsComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./features/cart/cart.component').then((m) => m.CartComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'all',
    pathMatch: 'full',
  },
];
