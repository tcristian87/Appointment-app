import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
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
    private appointsService: AppointService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('appointId')) {
        this.navCtrl.navigateBack('/home/tabs/book-appointment');
        return;
      }
      let fetchedUserId: string;
      this.authService.userId
      .pipe(
        take(1),
        switchMap(userId => {
          if(!userId) {
         throw new Error ('Found no user!')
      }
      fetchedUserId = userId;
      return this.appointsService
      .getAppoint(paramMap.get('appointId'));
      }))
       .subscribe((appoint) => {
          this.appoint = appoint;
        });
    });
  }
  ngOnDestroy() {
    if (this.appointSub) {
      this.appointSub.unsubscribe();
    }
  }
}
