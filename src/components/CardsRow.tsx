import { FC } from 'react';
import { IFilm, ISliceOptions } from '../interfaces';
import CardFilm from './CardFilm';

interface ISliceRow {
  handleClick?: any;
  films: IFilm[];
}

export const CardsRow: FC<ISliceRow & ISliceOptions> = ({ films, handleClick }) => {

  return (
    <div className='row-content-rows'>
      {films.map((e) => (
        <CardFilm
          id={e.id}
          backdrop_path={e.backdrop_path}
          title={e.title}
          vote_average={e.vote_average}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
