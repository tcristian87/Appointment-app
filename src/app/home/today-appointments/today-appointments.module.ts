import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayAppointmentsPageRoutingModule } from './today-appointments-routing.module';

import { TodayAppointmentsPage } from './today-appointments.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayAppointmentsPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [TodayAppointmentsPage],
})
export class TodayAppointmentsPageModule {}
