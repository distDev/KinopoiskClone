import { faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { IFilm } from '../interfaces';
import { Button } from './UI/Button';

interface IDownFilm {
  film: IFilm[];
}

// Нижний блок с подобным описанием фильма, который рендерится при клике на фильм
export const DownCardDescription: FC<IDownFilm> = ({ film }) => {
  return (
    <>
      {film.map((e) => (
        <div className='row-films__large' key={e.id}>
          <div className='row-films__large_content'>
            <div className='row-films__header_content'>
              <h2>{e.title}</h2>
              <div className='row-films__large_description'>
                <span>{e.vote_average}</span>
                <p>{e.release_date}</p>
                <p>драма, мелодрама</p>
                <p>18+</p>
              </div>
              <h3>{e.overview?.slice(0, 184) + '...'}</h3>
            </div>
            <div className='row-films__btns'>
              <Button variant='orange'>
                <FontAwesomeIcon icon={faPlay} />
                Смотреть трейлер
              </Button>
              <Button variant='normal'>
                <FontAwesomeIcon icon={faBookmark} />
              </Button>
            </div>
          </div>
          <img
            src={'https://image.tmdb.org/t/p/original' + e.backdrop_path}
            alt=''
          />
        </div>
      ))}
    </>
  );
};
