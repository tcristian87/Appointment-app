import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
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
  appointId: string;
  isLoading = false;
  private appointSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private appointService: AppointService,
    private alertCtrl: AlertController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('appointId')) {
        this.navCtrl.navigateBack('/home/tabs/book-appointment');
        return;
      }
      this.appointId = paramMap.get('appointId');
      this.isLoading = true;
      this.appointSub = this.appointService
        .getAppoint(paramMap.get('appointId'))
        .subscribe(
          (appoint) => {
            this.appoint = appoint;
            this.isLoading = false;
          },
          (error) => {
            this.alertCtrl
              .create({
                header: 'An error ocurred!',
                message: 'Could not load appoint.',
                buttons: [
                  {
                    text: 'Okay',
                    handler: () => {
                      this.router.navigate(['/home/tabs/book-appointment']);
                    },
                  },
                ],
              })
              .then((alertEl) => alertEl.present());
          }
        );
    });
  }

  onEdit(appointsId: string) {
    this.router.navigate([
      '/appointments-details/appointments-edit',
      appointsId,
    ]);
  }

  onDelete(appointId: string) {
    this.loadingCtrl.create({ message: 'Deleting...' }).then((loadingEl) => {
      loadingEl.present();
      this.appointService.onDeleting(appointId).subscribe(() => {
        loadingEl.dismiss();
      });
      this.router.navigate(['/home/tabs/book-appointment']);
    });
  }

  ngOnDestroy() {
    if (this.appointSub) {
      this.appointSub.unsubscribe();
    }
  }
}
