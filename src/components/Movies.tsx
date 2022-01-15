import { useState } from 'react';
import { IFilm, ISliceOptions } from '../interfaces';
import { SliderFilms } from './SliderFilms';
import { DownFilmDescription } from './DownFilmDescription';
import { RowFilms } from './RowFilms';


interface IMovies {
  films: IFilm[];
}

export const Movies = ({ title, films, variant }: IMovies & ISliceOptions) => {
  const [film, setFilm] = useState<any>([]);
  const [visible, setVisible] = useState(false);
  const { id }: any = films;

  const handleClick = (id: string) => {
    let filmData = films.filter((e) => e.id === id);
    setFilm(filmData);
    setVisible((visible) => !visible);
  };

  return (
    <div className='row-films'>
      {variant === 'slider' ? (
        <SliderFilms films={films} title={title} handleClick={handleClick} />
      ) : (
        <RowFilms films={films} handleClick={handleClick} />
      )}

      {visible ? <DownFilmDescription film={film} /> : null}
    </div>
  );
};
