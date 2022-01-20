import { makeAutoObservable } from 'mobx';
import { IUser } from '../interfaces';

class AuthUser {
  user: IUser = {
    email: null,
    photoURL: null,
    uid: null,
    login: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUser(payload: IUser) {
    this.user = {
      email: payload.email,
      photoURL: payload.photoURL,
      uid: payload.uid,
      login: payload.login,
    };

  }
}

export const myAuthUser  = new AuthUser()
