import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'book-appointment',
        loadChildren: () =>
          import('./book-appointment/book-appointment.module').then(
            (m) => m.BookAppointmentPageModule
          ),
      },
      {
        path: 'today-appointments',
        loadChildren: () =>
          import('./today-appointments/today-appointments.module').then(
            (m) => m.TodayAppointmentsPageModule
          ),
      },
      {
        path: 'new-appoint',
        loadChildren: () =>
          import('./new-appoint/new-appoint.module').then(
            (m) => m.NewAppointPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/home/tabs/today-appointments',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/tabs/today-appointments',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
