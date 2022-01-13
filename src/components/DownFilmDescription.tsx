import React, { FC } from 'react';
import { IFilm } from '../interfaces';

interface IDownFilm {
  film: IFilm[];
}

// Нижний блок с подобным описанием фильма, который рендерится при клике на фильм
export const DownFilmDescription: FC<IDownFilm> = ({ film }) => {
  return (
    <>
      {film.map((e) => (
        <div className='row-films__large' key={e.id}>
          <div className='row-films__large_content'>
            <h2>{e.name}</h2>
          </div>
          <img src={e.img} alt='' />
        </div>
      ))}
    </>
  );
};
