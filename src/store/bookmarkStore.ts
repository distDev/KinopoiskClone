import {  makeAutoObservable } from 'mobx';
import { IBookmarks } from '../interfaces';

class BookmarksUser {
  bookmarks: IBookmarks[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  AddBookmark(payload: IBookmarks) {
    this.bookmarks.push({
      id: payload.id,
      backdrop_path: payload.backdrop_path,
      vote_average: payload.vote_average,
    });
  }
}

export const myBookmarksUser = new BookmarksUser();
