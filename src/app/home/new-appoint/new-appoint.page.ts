import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { AppointService } from '../appoint.service';

@Component({
  selector: 'app-new-appoint',
  templateUrl: './new-appoint.page.html',
  styleUrls: ['./new-appoint.page.scss'],
})
export class NewAppointPage implements OnInit {
  form: FormGroup;
  date: string;
  hour: string;

  constructor(
    private appointService: AppointService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      phone: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      hour: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      date: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      service: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }
  createAppoint() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Creating appoint...',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.appointService
          .addAppoint(
            this.form.value.name,
            this.form.value.phone,
            this.form.value.hour,
            this.form.value.date,
            this.form.value.service
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(['/home/tabs/book-appointment']);
          });
      });
      console.log(this.form.value.hour);
      console.log(this.form.value.date);

    }
  
  }
