import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAppointPageRoutingModule } from './new-appoint-routing.module';

import { NewAppointPage } from './new-appoint.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewAppointPageRoutingModule,
  ],
  declarations: [NewAppointPage],
})
export class NewAppointPageModule {}
