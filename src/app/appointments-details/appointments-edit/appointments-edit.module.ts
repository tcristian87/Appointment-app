import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentsEditPageRoutingModule } from './appointments-edit-routing.module';

import { AppointmentsEditPage } from './appointments-edit.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppointmentsEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AppointmentsEditPage]
})
export class AppointmentsEditPageModule {}
