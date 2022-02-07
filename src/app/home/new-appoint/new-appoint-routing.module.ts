import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAppointPage } from './new-appoint.page';

const routes: Routes = [
  {
    path: '',
    component: NewAppointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAppointPageRoutingModule {}
