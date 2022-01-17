
export interface IFilm {
  backdrop_path?: string;
  id: number;
  title?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  vote_average: number;
  vote_count?: number;
}

export interface ISliceOptions {
 title?: string,
 variant?: 'slider' | 'row'
}