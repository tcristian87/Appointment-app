import { Component, OnDestroy, OnInit } from '@angular/core';
import { Appoint } from '../appoint.model';
import { AppointService } from '../appoint.service';
import { format } from 'date-fns';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-today-appointments',
  templateUrl: './today-appointments.page.html',
  styleUrls: ['./today-appointments.page.scss'],
})
export class TodayAppointmentsPage implements OnInit, OnDestroy {
  appoints: Appoint[];
  today = Date.now();
  tDay = format(new Date(this.today), 'dd.MM.yyyy');
  date = this.tDay;

  private appointSub: Subscription;

  constructor(private appointsService: AppointService, private route: Router) {}

  ngOnInit() {
    this.appointSub = this.appointsService.appoints.subscribe((appoint) => {
      this.appoints = appoint;
    });
    console.log(this.date)
  }
  onEdit(appointsId: string, slidingCard: IonItemSliding) {
    slidingCard.close();
    this.route.navigate([
      '/appointments-details/appointments-edit',
      appointsId,
    ]);
  }
  ngOnDestroy() {
    if (this.appointSub) {
      this.appointSub.unsubscribe();
    }
  }
}
