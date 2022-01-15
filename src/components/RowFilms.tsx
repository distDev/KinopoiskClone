import { FC } from 'react';
import { IFilm, ISliceOptions } from '../interfaces';
import CardFilm from './CardFilm';

interface ISliceRow {
  handleClick?: any;
  films: IFilm[];
}

export const RowFilms: FC<ISliceRow & ISliceOptions> = ({
  films,
  handleClick,
}) => {
  return (
    <div className='row-content-rows'>
      {films.map((e) => (
        <CardFilm id={e.id} rating={e.rating} img={e.img} handleClick={handleClick}/>
      ))}
    </div>
  );
};
