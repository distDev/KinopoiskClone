import { autorun, makeAutoObservable } from 'mobx';
import { IUser } from '../interfaces';

class AuthUser {
  user: IUser = {
    uid: null,
    email: null,
    photoURL: null,
    login: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUser(payload: IUser) {
    this.user = {
      uid: payload.uid,
      email: payload.email,
      photoURL: payload.photoURL,
      login: true,
    };

  }

  LogOutUser() {
    this.user = {
      uid: null,
      email: null,
      photoURL: null,
      login: false,
    };
  }
}

export const myAuthUser = new AuthUser();
