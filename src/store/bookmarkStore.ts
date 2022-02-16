import {  makeAutoObservable } from 'mobx';
import { IBook, IBookmarks } from '../interfaces';

class BookmarksUser {
  bookmarks: IBookmarks[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  AddBookmark(payload: IBookmarks) {
    this.bookmarks.push({
      id: payload.id,
      backdrop_path: payload.backdrop_path,
      vote_average: payload.vote_average
    });
    console.log(this.bookmarks);
  }

  RemoveBookmarks(payload: IBookmarks) {
    this.bookmarks = this.bookmarks.filter((e) => e.id !== payload.id);

    console.log(this.bookmarks)
  }
}

export const myBookmarksUser = new BookmarksUser();
