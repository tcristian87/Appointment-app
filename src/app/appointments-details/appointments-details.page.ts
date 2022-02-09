import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Appoint } from '../home/appoint.model';
import { AppointService } from '../home/appoint.service';

@Component({
  selector: 'app-appointments-details',
  templateUrl: './appointments-details.page.html',
  styleUrls: ['./appointments-details.page.scss'],
})
export class AppointmentsDetailsPage implements OnInit, OnDestroy {
  appoint: Appoint;
  private appointSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private appointsService: AppointService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('appointId')) {
        this.navCtrl.navigateBack('/home/tabs/book-appointment');
        return;
      }
      this.appointSub = this.appointsService
        .getAppoint(paramMap.get('appointId'))
        .subscribe(appoint => {
this.appoint = appoint;
        });
    });
  }
  ngOnDestroy(){
    if(this.appointSub) {
      this.appointSub.unsubscribe();
    }
  }
}
