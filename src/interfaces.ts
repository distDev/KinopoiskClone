
export interface IFilms {
  films: {
    img: string;
    rating: number;
    id: string;
    name: string;
    description: string;
  }[];
}
export interface IFilm {
   img: string;
    rating: number;
    id: string;
    name: string;
    description: string;
  
}

export interface ISliceOptions {
 title: string,
 end: number,
 start: number
}