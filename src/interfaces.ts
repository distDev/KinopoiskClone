
export interface IFilm {
   img: string;
    rating: number;
    id: string;
    name?: string;
    description?: string;
  
}

export interface ISliceOptions {
 title?: string,
 variant?: 'slider' | 'row'
}