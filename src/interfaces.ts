
export interface IFilm {
  backdrop_path?: string;
  id?: number;
  title?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  vote_average: number;
  vote_count?: number;
}

export interface ICast {
    cast: {
      name: string;
    }[];
    crew: {
      name: string;
      known_for_department: string;
    }[];
 
}

export interface IUser {
  email: string | null;
  photoURL: string | null;
  uid?: string | null;
  login: boolean;
}

export interface ISliceOptions {
 title?: string,
 variant?: 'slider' | 'row'
}

export interface IBookmarks {
  id: number;
  backdrop_path?: string;
  vote_average?: number;
}

export interface IBook {
  id: number
}