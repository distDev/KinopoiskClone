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

    // const localUser = {
    //   uid: payload.uid,
    //   email: payload.email,
    //   photoURL: payload.photoURL,
    //   login: true,
    // };

    
    localStorage.setItem('user', JSON.stringify(this.user));
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

export const myAuthUser  = new AuthUser()
