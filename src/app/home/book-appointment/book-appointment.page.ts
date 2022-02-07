import { Component, OnDestroy, OnInit } from '@angular/core';
import { Appoint } from '../appoint.model';
import { AppointService } from '../appoint.service';
import { format, parseISO } from 'date-fns';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit, OnDestroy {
  appoints: Appoint[];
  date: string;
  datetime: any;
  hour: any;

  private appointsSub: Subscription;

  constructor(private appointService: AppointService, private router: Router) {}

  ngOnInit() {
    this.appointsSub = this.appointService.appoints.subscribe((appoints) => {
      this.appoints = appoints;
    });
  }

  onEdit(appointsId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate([
      '/appointments-details/appointments-edit',
      appointsId,
    ]);
  }
  ngOnDestroy() {
    if (this.appointsSub) {
      this.appointsSub.unsubscribe();
    }
  }
  formatDate(value: string) {
    return format(parseISO(value), 'dd-MM-yyyy');
  }


}
