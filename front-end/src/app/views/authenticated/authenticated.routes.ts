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
        component: AllMealsComponent,
      },
      {
        path: 'all/:search',
        component: AllMealsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'all',
    pathMatch: 'full',
  },
];
