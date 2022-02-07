import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayAppointmentsPage } from './today-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: TodayAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayAppointmentsPageRoutingModule {}
