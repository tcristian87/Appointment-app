import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = true; // for test default should be flase
  private _userId = 'abc';

  get userIsAuthenticated() {
    // eslint-disable-next-line no-underscore-dangle
    return this._userIsAuthenticated;
  }

  get userId() {
    // eslint-disable-next-line no-underscore-dangle
    return this._userId;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(){}


  login() {
    // eslint-disable-next-line no-underscore-dangle
    this._userIsAuthenticated = true;
  }
  logout() {
    // eslint-disable-next-line no-underscore-dangle
    this._userIsAuthenticated = false;
  }
}
