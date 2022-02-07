import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentsDetailsPageRoutingModule } from './appointments-details-routing.module';

import { AppointmentsDetailsPage } from './appointments-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentsDetailsPageRoutingModule
  ],
  declarations: [AppointmentsDetailsPage]
})
export class AppointmentsDetailsPageModule {}
