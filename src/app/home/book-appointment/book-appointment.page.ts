import { Component, OnDestroy, OnInit } from '@angular/core';
import { Appoint } from '../appoint.model';
import { AppointService } from '../appoint.service';
import { format, parseISO } from 'date-fns';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit, OnDestroy {
  appoints: Appoint[];
  isLoading = false;
  date: string;
  datetime: any;
  hour: any;

  today = Date.now();
  tDay = format(new Date(this.today), 'yyyy-MM-dd');
  todayDate = this.tDay;

  oldAppoints = false;


  private appointsSub: Subscription;

  constructor(private appointService: AppointService, private route: ActivatedRoute) {}

  ngOnInit() {
     this.appointsSub = this.appointService.appoints.subscribe((appoints) => {
      this.appoints = appoints;
   });
  }

  ionViewWillEnter(){
    this.isLoading = true;
    this.appointService.fetchAppoints().subscribe(()=> {
      this.isLoading = false;
    });
  }


   ngOnDestroy() {
    if (this.appointsSub) {
      this.appointsSub.unsubscribe();
    }
  }
  formatDate(value: string) {
    return format(parseISO(value),  'yyyy-MM-dd');
  }

}
