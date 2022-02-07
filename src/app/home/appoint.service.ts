/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Appoint } from './appoint.model';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppointService {
  private _appoints = new BehaviorSubject<Appoint[]>([
    new Appoint(
      'c1',
      'Cristi',
      '0741879460',
      '10:30',
      '10-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c2',
      'Mishi',
      '0741879460',
      '11:00',
      '09-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c3',
      'Radu',
      '0741879460',
      '11:30',
      '08-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c4',
      'Ciprian',
      '0741879460',
      '12:00',
      '07-02-2022',
      'Tuns',
      'abc'
    ),    new Appoint(
      'c1',
      'Cristi',
      '0741879460',
      '10:30',
      '10-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c2',
      'Mishi',
      '0741879460',
      '11:00',
      '09-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c3',
      'Radu',
      '0741879460',
      '11:30',
      '08-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c4',
      'Ciprian',
      '0741879460',
      '12:00',
      '07-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c1',
      'Cristi',
      '0741879460',
      '10:30',
      '10-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c2',
      'Mishi',
      '0741879460',
      '11:00',
      '09-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c3',
      'Radu',
      '0741879460',
      '11:30',
      '08-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c4',
      'Ciprian',
      '0741879460',
      '12:00',
      '07-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c1',
      'Cristi',
      '0741879460',
      '10:30',
      '10-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c2',
      'Mishi',
      '0741879460',
      '11:00',
      '09-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c3',
      'Radu',
      '0741879460',
      '11:30',
      '08-02-2022',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c4',
      'Ciprian',
      '0741879460',
      '12:00',
      '07-02-2022',
      'Tuns',
      'abc'
    ),

  ]);

  get appoints() {
    return this._appoints.asObservable();
  }

  getClient(id: string) {
    return this.appoints.pipe(
      take(1),
      map((appoints) => ({ ...appoints.find((d) => d.id === id) }))
    );
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private authService: AuthService) {}

  addAppoint(
    name: string,
    phone: string,
    hour: string,
    date: string,
    service: string,
  ) {
    const newAppoint = new Appoint(
      Math.random().toString(),
      name,
      phone,
      hour,
      date,
      service,
      this.authService.userId
    );
    this.appoints.pipe(take(1)).subscribe((appoints) => {
      this._appoints.next(appoints.concat(newAppoint));
    });
  }
}
