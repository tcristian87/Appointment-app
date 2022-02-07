import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = true; // for test default should be flase
  private _userId = 'abc';

  get userIsAuthenticated () {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  constructor() {}


  login() {
    this._userIsAuthenticated = true;
  }
  logout() {
    this._userIsAuthenticated = false;
  }
}
