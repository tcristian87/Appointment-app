import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Subscription } from 'rxjs';
import { AppointService } from 'src/app/home/appoint.service';
import { Appoint } from '../../home/appoint.model';

@Component({
  selector: 'app-appointments-edit',
  templateUrl: './appointments-edit.page.html',
  styleUrls: ['./appointments-edit.page.scss'],
})
export class AppointmentsEditPage implements OnInit, OnDestroy {
  appoint: Appoint;
  appointId: string;
  form: FormGroup;
  date: string;
  hour: string;
  isLoading = false;

  private appointSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private appointService: AppointService,
    private navCtrl: NavController,
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
        .subscribe((appoint) => {
          this.appoint = appoint;
          this.form = new FormGroup({
            name: new FormControl(this.appoint.name, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            phone: new FormControl(this.appoint.phone, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            date: new FormControl(this.appoint.date, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            hour: new FormControl(this.appoint.date, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            service: new FormControl(this.appoint.service, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
          });
          this.isLoading = false;
        });
    });
  }

  onUpdateAppoint() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Updating appoint..',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.appointService
          .updateAppoint(
            this.appoint.id,
            this.form.value.name,
            this.form.value.phone,
            this.form.value.hour,
            this.form.value.date,
            this.form.value.service
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.navCtrl.navigateBack('/home/tabs/book-appointment');
          });
      });
  }
  ngOnDestroy(): void {
    if (this.appointSub) {
      this.appointSub.unsubscribe();
    }
  }
  formatDate(value: string) {
    return format(parseISO(value), 'dd-MM-yyyy');
  }
  formatHour(value: string) {
    return format(parseISO(value), 'hh:mm');
  }
}
