import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private appointService: AppointService, private router: Router) {}

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
        updateOn: 'blur',
        // validators: [Validators.required],
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
    this.appointService.addAppoint(
      this.form.value.name,
      this.form.value.phone,
      this.form.value.hour,
      this.form.value.date,
      this.form.value.service
    );
    this.form.reset();
    this.router.navigate(['/home/tabs/book-appointment']);
  }

}
