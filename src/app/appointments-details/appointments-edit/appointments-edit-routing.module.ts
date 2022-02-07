import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsEditPage } from './appointments-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsEditPageRoutingModule {}
