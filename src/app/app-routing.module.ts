import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'appointments-details',
    children: [
      {
        path: ':appointId',
        loadChildren: () =>
          import('./appointments-details/appointments-details.module').then(
            (m) => m.AppointmentsDetailsPageModule
          ),
      },
      {
        path: 'appointments-edit/:appointId',
        loadChildren: () =>
          import(
            './appointments-details/appointments-edit/appointments-edit.module'
          ).then((m) => m.AppointmentsEditPageModule),
      },
    ],
    canLoad: [AuthGuard],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}