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
      '2022-02-07T10:00:00+02:00',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c2',
      'Mishi',
      '0741879460',
      '2022-02-08T11:00:00+02:00',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c3',
      'Radu',
      '0741879460',
      '2022-02-07T10:00:00+02:00',
      'Tuns',
      'abc'
    ),
    new Appoint(
      'c4',
      'Ciprian',
      '0741879460',
      '2022-02-07T11:00:00+02:00',
      'Tuns',
      'abc'
    ),
  ]);

  get appoints() {
    // eslint-disable-next-line no-underscore-dangle
    return this._appoints.asObservable();
  }

  getClient(id: string) {
    return this.appoints.pipe(
      take(1),
      map((appoints) => {
        return { ...appoints.find((d) => d.id === id) };
      })
    );
  }

  constructor(private authService: AuthService) {}

  addAppoint(
    name: string,
    phone: string,
    date: string,
    service: string
  ) {
    const newAppoint = new Appoint(
      Math.random().toString(),
      name,
      phone,
      date,
      service,
      this.authService.userId
    );
    this.appoints.pipe(take(1)).subscribe((appoints) => {
      this._appoints.next(appoints.concat(newAppoint));
    });
  }
}
