import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./views/authenticated/authenticated.routes').then(
        (r) => r.routes
      ),
  },
  // {
  //   path:'auth'
  // },
  {
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full',
  },
];
