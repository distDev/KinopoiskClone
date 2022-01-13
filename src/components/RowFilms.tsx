import { FC, useState } from 'react';
import { IFilms, ISliceOptions } from '../interfaces';
import { SliderFilms } from './SliderFilms';
import { DownFilmDescription } from './DownFilmDescription';

export const RowFilms = ({
  title,
  start,
  end,
  films,
}: IFilms & ISliceOptions) => {
  const [film, setFilm] = useState<any>([]);
  const [visible, setVisible] = useState(false);

  const handleClick = (id: string) => {
    let filmData = films.filter((e) => e.id === id);
    setFilm(filmData);
    setVisible((visible) => !visible);
  };

  return (
    <div className='row-films'>
      <SliderFilms
        start={start}
        end={end}
        films={films}
        title={title}
        handleClick={handleClick}
      />
      {visible ? <DownFilmDescription film={film} /> : null}
    </div>
  );
};
