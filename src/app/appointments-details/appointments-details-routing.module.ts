import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsDetailsPage } from './appointments-details.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsDetailsPageRoutingModule {}
