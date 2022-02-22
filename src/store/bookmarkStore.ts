import { makeAutoObservable } from 'mobx';
import { IBook, IFilm } from '../interfaces';

class BookmarksUser {
  bookmarks: IFilm[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  AddBookmark(payload: IFilm) {
    this.bookmarks.push({
      id: payload.id,
      backdrop_path: payload.backdrop_path,
      vote_average: payload.vote_average,
    });
  }

  RemoveBookmarks(payload: IFilm) {
    this.bookmarks = this.bookmarks.filter((e) => e.id !== payload.id);
  }
}

export const myBookmarksUser = new BookmarksUser();
