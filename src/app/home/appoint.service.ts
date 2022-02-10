/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Appoint } from './appoint.model';
import { format, parseISO } from 'date-fns';

interface AppointData {
  name: string;
  phone: string;
  hour: string;
  date: string;
  service: string;
  userId: string;
}

// [
//   new Appoint(
//     'c1',
//     'Cristi',
//     '0741879460',
//     '10:30',
//     new Date('10-02-2022'),
//     'Tuns',
//     'abc'
//   ),
//   new Appoint(
//     'c2',
//     'Mishi',
//     '0741879460',
//     '11:00',
//     new Date('09-02-2022'),
//     'Tuns',
//     'abc'
//   ),
//   new Appoint(
//     'c3',
//     'Radu',
//     '0741879460',
//     '11:30',
//     new Date('08-02-2022'),
//     'Tuns',
//     'abc'
//   ),
//   new Appoint(
//     'c4',
//     'Ciprian',
//     '0741879460',
//     '12:00',
//     new Date('07-02-2022'),
//     'Tuns',
//     'abc'

@Injectable({
  providedIn: 'root',
})
export class AppointService {
  private _appoints = new BehaviorSubject<Appoint[]>([]);

  get appoints() {
    return this._appoints.asObservable();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private authService: AuthService, private http: HttpClient) {}

  fetchAppoints() {
    return this.http
      .get<{ [key: string]: AppointData }>(
        'https://ionic-appoint-app-default-rtdb.europe-west1.firebasedatabase.app/appoints.json'
      )
      .pipe(
        map((resData) => {
          const appoints = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              appoints.push(
                new Appoint(
                  key,
                  resData[key].name,
                  resData[key].phone,
                  resData[key].hour,
                  resData[key].date,
                  resData[key].service,
                  resData[key].userId
                )
              );
            }
          }
          return appoints;
          // return [];
        }),
        tap((appoints) => {
          this._appoints.next(appoints);
        })
      );
  }

  // getAppoint(id: string) {
  //   return this.http
  //     .get<AppointData>(
  //       `https://ionic-appoint-app-default-rtdb.europe-west1.firebasedatabase.app/appoints/${id}.json`
  //     )
  //     .pipe(
  //       // eslint-disable-next-line arrow-body-style
  //       map(appointData => {
  //         return new Appoint(
  //           id,
  //           appointData.name,
  //           appointData.phone,
  //           appointData.hour,
  //           new Date(appointData.date),
  //           appointData.service,
  //           appointData.userId
  //         );
  //       })
  //     );
  // }
  getAppoint(id: string) {
    return this.appoints.pipe(
      take(1),
      map((appoints) => ({ ...appoints.find((a) => a.id === id) }))
    );
  }

  addAppoint(
    name: string,
    phone: string,
    hour: string,
    date: string,
    service: string
  ) {
    let generateId: string;
    const newAppoint = new Appoint(
      Math.random().toString(),
      name,
      phone,
      hour,
      date,
      service,
      this.authService.userId
    );
    // eslint-disable-next-line max-len
    return this.http
      .post<{ name: string }>(
        'https://ionic-appoint-app-default-rtdb.europe-west1.firebasedatabase.app/appoints.json',
        { ...newAppoint, id: null }
      )
      .pipe(
        switchMap((resData) => {
          generateId = resData.name;
          return this.appoints;
        }),
        take(1),
        tap((appoints) => {
          newAppoint.id = generateId;
          this._appoints.next(appoints.concat(newAppoint));
        })
      );
    // this.appoints.pipe(take(1)).subscribe((appoints) => {
    //   this._appoints.next(appoints.concat(newAppoint));
    // });
  }
  updateAppoint(
    appointId: string,
    name: string,
    phone: string,
    hour: string,
    date: string,
    service: string
  ) {
    let updateAppoints: Appoint[];
    return this.appoints.pipe(
      take(1),
      switchMap((appoints) => {
        if (!appoints || appoints.length <= 0) {
          return this.fetchAppoints();
        } else {
          return of(appoints);
        }
      }),
      switchMap((appoints) => {
        const updateAppointIndex = appoints.findIndex(
          (ap) => ap.id === appointId
        );
        updateAppoints = [...appoints];
        const oldAppoint = updateAppoints[updateAppointIndex];
        updateAppoints[updateAppointIndex] = new Appoint(
          oldAppoint.id,
          name,
          phone,
          hour,
          date,
          service,
          oldAppoint.userId
        );
        return this.http.put(
          `https://ionic-appoint-app-default-rtdb.europe-west1.firebasedatabase.app/appoints/${appointId}.json`,
          { ...updateAppoints[updateAppointIndex], id: null }
        );
      }),
      tap(() => {
        this._appoints.next(updateAppoints);
      })
    );
  }
}
